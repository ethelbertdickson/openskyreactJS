import { useEffect, useState } from 'react';
import { base64Credentials } from '../config/config';

const useOpenSky = () => {
   const [users, setUsers] = useState([]);
   const [isLoading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      fetch(
         'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800',
         // {
         //    method: 'GET',
         //    headers: {
         //       Authorization: `Basic ${base64Credentials}`,
         //    },
         //    credentials: 'include',
         // },
      )
         .then((res) => res.json())
         .then((data) => {
            // console.log(data);
            setUsers(data);
            setLoading(false);
         })
         .catch((error) => {
            setError(error.message);
            setLoading(false);
         });
   }, []);

   return { users, isLoading, error };
};

export default useOpenSky;

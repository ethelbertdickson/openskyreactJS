import { useEffect, useState } from 'react';
import { base64Credentials } from '../config/config';

const useOpenSky = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch(
         'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800',
         {
            method: 'GET',
            headers: {
               Authorization: `Basic ${base64Credentials}`,
            },
            credentials: 'include',
         },
      )
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setUsers(data);
         })
         .catch((error) => console.log(error.message));
   }, []);

   return users;
};

export default useOpenSky;

import { Navigate, useNavigate } from 'react-router-dom';

import useOpenSky from '../hooks/useOpenSky';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Dashboard = () => {
   const { users, isLoading, error } = useOpenSky();
   const navigate = useNavigate();
   const token = localStorage.getItem('opensky-token');

   const handleLogout = () => {
      localStorage.removeItem('opensky-token');
      navigate('/');
   };

   if (!token) {
      return <Navigate to='/' />;
   }

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return (
         <div>
            Unable to fetch the requested data, check your internet connection
            and try again.
         </div>
      );
   }

   return (
      <>
         <div className='d-flex mb-3 bg-dark sticky-top sticky-lg-top text-warning mb-0 p-3'>
            <div className='p-2 fs-3 '>Open Sky Dashboard</div>
            <button
               className='btn text-warning ms-auto p-2'
               onClick={handleLogout}
            >
               Logout
            </button>
         </div>

         <table className='table'>
            <TableHead />
            <TableBody users={users} />
         </table>
      </>
   );
};

export default Dashboard;

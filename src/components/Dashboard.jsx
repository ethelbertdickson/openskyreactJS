import { useLocation, Navigate } from 'react-router-dom';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useOpenSky from '../hooks/useOpenSky';

const Dashboard = () => {
   const users = useOpenSky();
   const location = useLocation();
   const authenticated = new URLSearchParams(location.search).get(
      'authenticated',
   );

   if (authenticated === 'true') {
      return (
         <>
            <h3>Open Sky Dashboard</h3>
            <table className='table'>
               <TableHead />
               <TableBody users={users} />
            </table>
         </>
      );
   } else {
      return <Navigate to='/' />;
   }
};

export default Dashboard;

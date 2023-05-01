import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useOpenSky from '../hooks/useOpenSky';

const Dashboard = () => {
   const users = useOpenSky();
   const location = useLocation();
   const navigate = useNavigate();

   const authenticated = new URLSearchParams(location.search).get(
      'authenticated',
   );

   const handleLogout = () => {
      localStorage.clear();
      navigate('/');
   };

   if (authenticated === 'true') {
      return (
         <>
            <div className='d-flex mb-3'>
               <div className='p-2 fs-3'>Dashboard</div>
               <button
                  className='btn btn-link ms-auto p-2'
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
   } else {
      return <Navigate to='/' />;
   }
};

export default Dashboard;

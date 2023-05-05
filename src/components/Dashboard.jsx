import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import useOpenSky from '../hooks/useOpenSky';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Dashboard = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const { flights, isLoading, error } = useOpenSky();
   const navigate = useNavigate();
   const token = localStorage.getItem('opensky-token');

   const handleLogout = () => {
      localStorage.removeItem('opensky-token');
      navigate('/');
   };

   const filteredFlights = flights.filter(
      (flight) =>
         flight.callsign &&
         flight.callsign.toLowerCase().includes(searchQuery.toLowerCase()),
   );

   if (!token) {
      return <Navigate to='/' />;
   }

   if (isLoading) {
      return (
         <div className='bg-warning text-light'>Loading flight data...</div>
      );
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
         <div className='d-flex bg-dark sticky-top sticky-lg-top text-warning mb-0 p-3'>
            <div className='p-2 fs-3 '>Open Sky Dashboard</div>
            <button
               className='btn text-warning ms-auto p-2'
               onClick={handleLogout}
            >
               Logout
            </button>
         </div>
         <div className='input-group mb-0'>
            <input
               type='text'
               value={searchQuery}
               className='form-control'
               placeholder='Search flights using flight codes. E.g SWG9426 | swg9426'
               onChange={(e) => setSearchQuery(e.target.value)}
            />
         </div>

         <table className='table'>
            <TableHead />
            <TableBody flightData={filteredFlights} />
         </table>
      </>
   );
};

export default Dashboard;

import TableHead from './TableHead';
import TableBody from './TableBody';
import useOpenSky from '../hooks/useOpenSky';

const Dashboard = () => {
   const users = useOpenSky();
   console.log(users);

   return (
      <>
         <h3>Open Sky Dashboard</h3>
         <table className='table'>
            <TableHead />
            <TableBody users={users} />
         </table>
      </>
   );
};

export default Dashboard;

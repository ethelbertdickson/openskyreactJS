import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div>
         <div class='d-flex align-items-center justify-content-center vh-100 bg-secondary'>
            <div class='w-25 border p-3 rounded bg-light'>
               <h3>404 - Page Not Found</h3>
               <p class='text-danger'>
                  The page you are looking for does not exist.
               </p>
               <Link to='/dashboard'>Go to Dashboard</Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound;

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
   let navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      //
      const { email, password } = data;
      const emailstored = localStorage.getItem('email');
      const passStored = localStorage.getItem('password');

      if (email === emailstored && password === passStored) {
         console.log('login successful');
         navigate('/dashboard');
      } else {
         alert('Invalid credentials');
      }
   };

   return (
      <div className='d-flex align-items-center justify-content-center vh-100 bg-secondary'>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-25 border p-3 rounded bg-light'
         >
            <div className='mb-3'>
               <label htmlFor='email' className='form-label text-bg-success'>
                  Email address
               </label>
               <input
                  {...register('email', {
                     required: true,
                     minLength: 3,
                     pattern:
                        /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  })}
                  type='text'
                  className='form-control'
                  id='email'
               />
               {errors.email?.type === 'required' && (
                  <p className='text-danger'>Email is required</p>
               )}
               {errors.email?.type === 'minLength' && (
                  <p className='text-danger'>
                     Minimum must have more than 3 characters
                  </p>
               )}
               {errors.email?.type === 'pattern' && (
                  <p className='text-danger'>Must be a valid Email</p>
               )}
            </div>
            <div className='mb-3'>
               <label htmlFor='password' className='form-label text-bg-success'>
                  Password
               </label>
               <input
                  {...register('password', {
                     required: true,
                     minLength: 4,
                  })}
                  type='password'
                  className='form-control'
                  id='password'
               />
               {errors.password?.type === 'required' && (
                  <p className='text-danger'>Password is required</p>
               )}
               {errors.password?.type === 'minLength' && (
                  <p className='text-danger'>
                     Password must be more than 3 characters
                  </p>
               )}
            </div>
            <button type='submit' className='btn btn-primary float-end'>
               Submit
            </button>
         </form>
      </div>
   );
};

export default LoginForm;

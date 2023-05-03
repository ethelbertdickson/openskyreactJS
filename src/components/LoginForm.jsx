import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
   const [emailAndPassword, setEmailAndPassword] = useState({
      email: '',
      password: '',
   });
   const [formError, setFormError] = useState('');

   let navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm();

   const onSubmit = (data) => {
      //
      const { email, password } = data;

      if (email === 'admin@gmail.com' && password === 'password') {
         console.log('login successful');
         localStorage.setItem('opensky-token', data);
         navigate('/dashboard');
      } else {
         setFormError('Invalid username or password');
      }
   };

   return (
      <>
         <div className='d-flex align-items-center justify-content-center vh-100 bg-secondary'>
            <div className='w-25 border p-3 rounded bg-light'>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <EmailInput register={register} errors={errors} />
                  <PasswordInput register={register} errors={errors} />
                  <SubmitButton isValid={isValid} name='Submit' />
                  <p className='text-danger'>{formError}</p>
               </form>
            </div>
         </div>
      </>
   );
};

export default LoginForm;

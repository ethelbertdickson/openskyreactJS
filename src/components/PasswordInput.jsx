import React from 'react';

const PasswordInput = ({ register, errors }) => {
   return (
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
   );
};

export default PasswordInput;

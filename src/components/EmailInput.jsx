import React from 'react';

const EmailInput = ({ register, errors }) => {
   return (
      <div className='mb-3'>
         <label htmlFor='email' className='form-label text-bg-success'>
            Email address
         </label>
         <input
            {...register('email', {
               required: true,
               minLength: 3,
               pattern: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
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
   );
};

export default EmailInput;

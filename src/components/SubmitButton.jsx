import React from 'react';

const SubmitButton = ({ name, isValid }) => {
   return (
      <button
         disabled={!isValid}
         type='submit'
         className='btn btn-primary float-end'
      >
         {name}
      </button>
   );
};

export default SubmitButton;

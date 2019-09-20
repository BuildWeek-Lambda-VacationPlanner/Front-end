import React from 'react';

const NewUser = () => {
  return(
    <div>
      <form>
        {/* TODO: add alert for both fields, validate user input */}
        <input 
          type='email' 
          name='email' 
          placeholder='example@blank.com' 
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
        />
      </form>
    </div>
  );
};

export default NewUser;
import React from 'react';

const VanilaCSSForm = () => {
     // declare a event handler function with form here
  const handlerFormRegister = event => {
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value;
    console.log(email, password);
  }

  //declare here a 'emailOnBlur()' function use 'onBlur' with email input
  const emailOnBlur = event => {
    console.log(event.target.value);
  }

  //declare here a 'passwordOnBlur()' function use 'onBlur' with password input
  const passwordOnBlur = event => {
    console.log(event.target.value);
  }
  
    return (
        <div>
            {/* <form onSubmit={handlerFormRegister}>
        <input onBlur={emailOnBlur} type="email" name="email" id="" placeholder='Enter your email'/>
        <br />
        <input onBlur={passwordOnBlur} type="password" name="password" id="" placeholder='Enter your password'/>
        <br />
        <button type="submit">Register Now</button>
      </form> */}
        </div>
    );
};

export default VanilaCSSForm;
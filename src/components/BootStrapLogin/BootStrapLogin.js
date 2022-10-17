import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

//declare auth 'getAuth' firebase here
const auth = getAuth(app);

//declare a 'useState' show message login successful

const BootStrapLogin = () => {
    const [success, setSuccess] = useState(false);

    //declare a loginFormHandler and login success here
    const loginFormHandler = event => {
        event.preventDefault();
        success(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        }).catch( error => {
            console.error('error: ', error)
        })
    
    }
    return (
        <div className='w-50 mx-auto shadow p-3'>
            <h3 className='text-primary mb-4'>Please Login Now!!!</h3>
            <form onSubmit={loginFormHandler}>
            <div className="mb-3">
            <label for="emailInput" className="form-label">Email</label>
            <input type="text" name='email' className="form-control" id="emailInput" placeholder="Enter your email"required/>
            </div>
            <div className="mb-3">
            <label for="passwordInput" className="form-label">Password</label>
            <input type="text" name='password' className="form-control" id="passwordInput" placeholder="Enter your password" required/>
            </div>
            <button className="btn btn-primary" type="submit">Login Now</button>
            </form>
            { success && 
            <p className='text-success'>Log IN successful</p>
            }
            <p className='mt-2'><small>Now create an account this website?Please<Link to='/register now'>Register</Link></small></p>
        </div>
    );
};

export default BootStrapLogin;
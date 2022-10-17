import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

//declare auth 'getAuth' firebase here
const auth = getAuth(app);

//declare a 'useState' show message login successful

const BootStrapLogin = () => {
    const [success, setSuccess] = useState(false);

    const [user, setUser] = useState({});

    //declare a state and got user email here
    const [userMail, setUserMail] = useState('');

    //declare a loginFormHandler and login success here
    const loginFormHandler = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            setUser(user);
            console.log(user);
            setSuccess(true);
            form.reset();
        }).catch( error => {
            console.error('error: ', error)
        })
    
    }
    //declare logOut function here
    const logOutHandler = () => {
        signOut(auth)
        .then( ()=> {
            alert('sign-out successful!!')
        }).catch( error => {
            console.error('error: ', error);
        })
    }

    const emailBlurHandler = event => {
        const email = event.target.value;
        setUserMail(email);
        console.log(email)
    } 
    
    //declare a function forget here
    const forgetPasswordHandler = () => {
        sendPasswordResetEmail(auth, userMail)
        .then( ()=> {
            alert('password reset email sent');
        }).catch(error => {
            console.error('error: ', error);
        })
    }

    return (
        <div className='w-50 mx-auto shadow p-3'>
            <h3 className='text-primary mb-4'>Please LogIN!</h3>
            <form onSubmit={loginFormHandler}>
            <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" onBlur={emailBlurHandler} name='email' className="form-control" id="emailInput" placeholder="Enter your email" required/>
            </div>
            <div className="mb-3">   
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" name='password' className="form-control" id="passwordInput" placeholder="Enter your password" required/>
            </div>
            {user.uid ?
            <button onClick={logOutHandler} type="button" className="btn btn-secondary me-3">Log Out</button>
            :
            <button className="btn btn-primary" type="submit">Log IN</button>}
            </form>
            { success && 
            <p className='text-success'>Log IN successful</p>
            }
            <p className='mt-2'><small>Now create an account this website?Please<Link to='/register now'>Register</Link></small></p>
            <p>Forget pasword? <button type='button' onClick={forgetPasswordHandler} className='btn btn-link'>Reset password</button></p>
        </div>
    );
};

export default BootStrapLogin;
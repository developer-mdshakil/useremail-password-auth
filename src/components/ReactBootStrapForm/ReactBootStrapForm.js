import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

//declare a auth with app here
const auth = getAuth(app);

const ReactBootStrapForm = () => {
    //declare useState on empty password error message
    const [passwordError, setPasswordError] = useState('');

    //declare useState on successful message
    const [succes, setSucces] = useState(false);

    //declare 'formRegisterHandler()' with form by "onSubmit()" here
    const formRegisterHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        if(!/(?=.*[A-Z).*[A-Z])/.test(password)){
            setPasswordError('Please!!provided at least two uppercase charecters.');
            return;
        }
        if(password.length < 6){
            setPasswordError('please provide at least 6 charecters.');
            return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('please add at least one special charecter.');
            return;
        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSucces(true);
            form.reset();
        }).catch(error => {
            console.error('error: ',error)
            setPasswordError(error.message);
        })
    }

    return (
        <div className='w-50 mx-auto shadow p-3'>
        <h3 className='text-primary'>Register Now!!!</h3>
        <Form onSubmit={formRegisterHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
        <p className='text-danger'>{passwordError}</p>
        {succes && <p className='text-success'>Your registration successfuly</p>}
        </Form.Group>
        <Button variant="primary" type="submit">
            Register                                     
        </Button>
        </Form>
        <p className='mt-2'><small>Have you already account?Please<Link to='/login now'>Login Now</Link></small></p>
        </div>
    );
};

export default ReactBootStrapForm;
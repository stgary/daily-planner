  import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { POST_LOGIN } from  '../config';
import { POST_REGISTER } from  '../config';

export default function Contact() {
  const [ view, setView ] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();
  
  const onLogin = data => {
    axios 
      .post(POST_LOGIN, data)
        .then(res => {
          console.log(res.data);
          window.localStorage.setItem('token', res.data.token);
          history.push('/calendar');
        })
        .catch(error => {
          console.log(error.message);
        });

    reset();
  }

  const onRegister = data => {
    axios 
      .post(POST_REGISTER, data)
        .then(res => {
          console.log(res.data);
          window.localStorage.setItem('token', res.data.token);
          history.push('/calendar');
        })
        .catch(error => {
          console.log(error.message);
        });

    reset();
  }

  return (
    <div className='sign'>
      <div className='sign-container'>
        {!view && 
          <div className='login-form'>
            <form onSubmit={handleSubmit(onLogin)}>
              <input
                name='username'
                type='text'
                placeholder='Your username...'
                ref={register({ required: true })}
              />
              <p className='error'>{errors.name && 'Username is a required field!'}</p>

              <input
                name='password'
                type='password'
                placeholder='Your password...'
                ref={register({ required: true })}
              />
              <p className='error'>{errors.name && 'Password is a required field!'}</p>

              <div className='btn-container'>
                <button
                  name='send'
                  type='submit'
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        }

        {view &&
          <div className='register-form'>
            <form onSubmit={handleSubmit(onRegister)}>
              <input
                name='name'
                type='text'
                placeholder='Your name...'
                ref={register({ required: true })}
              />
              <p className='error'>{errors.name && 'Name is a required field!'}</p>
              
              <input
                name='username'
                type='text'
                placeholder='Your username...'
                ref={register({ required: true })}
              />
              <p className='error'>{errors.name && 'Username is a required field!'}</p>

              <input
                name='email'
                type='email'
                placeholder='Your email...'
                ref={register({ required: true })}
              />
              <p className='error'>{errors.email && 'Email is a required field!'}</p>

              <input
                name='password'
                type='password'
                placeholder='Your password...'
                ref={register({ required: true })}
              />
              <p className='error'>{errors.name && 'Password is a required field!'}</p>

              <div className='btn-container'>
                <button
                  name='send'
                  type='submit'
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        }
        <div className='sign-up'>
          <span onClick={() => setView(!view)}>Don't have an account? Click here to register!</span>
        </div>
      </div>
    </div>
  )
}
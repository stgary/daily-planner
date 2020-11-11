  import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Contact({ setUser }) {
  const [ view, setView ] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const POST_LOGIN = 'http://dayplans.herokuapp.com/auth/login';
  const POST_REGISTER = 'http://dayplans.herokuapp.com/auth/register';
  
  const onLogin = data => {
    axios 
      .post(POST_LOGIN, data)
        .then(res => {
          window.localStorage.setItem('token', res.data.token);
          window.localStorage.setItem('id', res.data.id);
          window.localStorage.setItem('name', res.data.name);
          setUser({ id: res.data.id, name: res.data.name })
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
          window.localStorage.setItem('token', res.data.token);
          window.localStorage.setItem('id', res.data.id);
          window.localStorage.setItem('name', res.data.name);
          setUser({ id: res.data.id, name: res.data.name })
          history.push('/calendar');
        })
        .catch(error => {
          console.log(error.message);
        });

    reset();
  }

  return (
    <div className='sign'>
      <div className='tabs'>
        <button 
          className='tab' 
          onClick={() => setView(!view)}
        >
          Sign In
        </button>
        <button 
          className='tab' 
          onClick={() => setView(!view)}
        >
          Sign Up
        </button>
      </div>
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

              <input
                name='password'
                type='password'
                placeholder='Your password...'
                ref={register({ required: true })}
              />

              <p className='error'>{errors.name && 'Username is a required field!'}</p>
              <p className='error'>{errors.name && 'Password is a required field!'}</p>

              <div className='btn-container'>
                <button
                  className='submit'
                  name='send'
                  type='submit'
                >
                  Submit
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
              
              <input
                name='username'
                type='text'
                placeholder='Your username...'
                ref={register({ required: true })}
              />

              <input
                name='email'
                type='email'
                placeholder='Your email...'
                ref={register({ required: true })}
              />

              <input
                name='password'
                type='password'
                placeholder='Your password...'
                ref={register({ required: true })}
              />

              <div className='btn-container'>
                <button
                  className='send'
                  name='send'
                  type='submit'
                >
                  Submit
                </button>
              </div>
              
              <p className='error'>{errors.name && 'Username is a required field!'}</p>
              <p className='error'>{errors.email && 'Email is a required field!'}</p>
              <p className='error'>{errors.name && 'Name is a required field!'}</p>
              <p className='error'>{errors.name && 'Password is a required field!'}</p>

            </form>
          </div>
        }
      </div>
    </div>
  )
}
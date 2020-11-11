  import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Contact({ setUser }) {
  const [ view, setView ] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const POST_LOGIN = 'https://dayplans.herokuapp.com/auth/login';
  const POST_REGISTER = 'https://dayplans.herokuapp.com/auth/register';
  
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
          if(error) {
            window.alert('You have yet to register or your username and password is incorrect')
          }
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
          id='tabs'
          className='tab' 
          onClick={() => setView(false)}
        >
          Sign In
        </button>
        <button
          id='tabs'
          className='tab' 
          onClick={() => setView(true)}
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
                placeholder={errors.username ? 'Username is a required field!' : 'Your username...'}
                ref={register({ required: true })}
              />

              <input
                name='password'
                type='password'
                placeholder={errors.password ? 'Password is a required field!' : 'Your password...'}
                ref={register({ required: true })}
              />

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
                placeholder={errors.name ? 'Name is a required field!' : 'Your name...'}
                ref={register({ required: true })}
              />
              
              <input
                name='username'
                type='text'
                placeholder={errors.username ? 'Username is a required field!' : 'Your username...'}
                ref={register({ required: true })}
              />

              <input
                name='email'
                type='email'
                placeholder={errors.email ? 'Email is a required field!' : 'Your email...'}
                ref={register({ required: true })}
              />

              <input
                name='password'
                type='password'
                placeholder={errors.password ? 'Password is a required field!' : 'Your password...'}
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
              
              <p className='error'>{errors.username && 'Username is a required field!'}</p>
              <p className='error'>{errors.email && 'Email is a required field!'}</p>
              <p className='error'>{errors.name && 'Name is a required field!'}</p>
              <p className='error'>{errors.password && 'Password is a required field!'}</p>

            </form>
          </div>
        }
      </div>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can add further login logic here
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
              <h3 className="font-bold text-lg">Login!</h3>
              <div className="mt-4 space-y-2">
                <label htmlFor="email">Email</label><br/>
                <input 
                  {...register('email', { required: 'Email is required' })} 
                  type='email' 
                  id="email" 
                  placeholder='Enter your email' 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                /><br/>
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div className="mt-4 space-y-2">
                <label htmlFor="password">Password</label><br/>
                <input 
                  {...register('password', { required: 'Password is required' })} 
                  type='password' 
                  id="password" 
                  placeholder='Enter your Password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                /><br/>
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
              <div className="mt-4 space-y-2 flex justify-around">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
                <p>Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

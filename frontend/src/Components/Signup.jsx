import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
export default function Signup() {
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
    <div className='flex h-screen items-center justify-center  '>
    <div  className="w-[600px]">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup!</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input {...register('name', { required: 'Name is required' })} 
        type='text' placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
        <br/>
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input {...register('Email', { required: 'Email is required' })} 
        type='email' 
         placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
   <br/>
   {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input {...register('password', { required: 'Password is required' })}  
        type='password' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    <br/>
    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
    </div>
    <div className='mt-4 space-y-2 flex justify-around' >
        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'> Signup</button>
        <p className='text-xl'>Have Account? <button className='underline text-blue-500 cursor-pointer'
        onClick={()=>
            document.getElementById("my_modal_3").showModal()
        }>
       Login
       </button>{""}
       <Login/>
       </p>
    </div>
    </form>

  </div>
</div>  
    </div>
    </>
  )
}

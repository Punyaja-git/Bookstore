import React from 'react'
import {Link} from 'react-router-dom'
import Cards from './Cards'
import list from "../../public/list.json"
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
    <div className='mt-28 items-center justify-center text-center '>
      <h1 className='text-2xl  md:text-4xl'>We are deligted to have you <span className='text-pink-500'>Heare! :)</span> </h1>
   <p className='mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
   <Link to="/">
   <button className='text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
   </Link>
    </div>
    <div className='mt-13 grid grid-cols-1 md:grid-cols-3 '>
      {list.map((item) => (
  <Cards key={item.id} item={item} />
))}
    </div>
   </div>
   </>
  )
}

export default Course

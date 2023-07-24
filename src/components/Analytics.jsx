import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Anaytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' >
        <div className='max-w[1240px] max-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2 ' >Manage Data Analytics Centrally </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione, illo laudantium earum ullam quis eum vero totam deleniti id magnam nisi laboriosam quam. Voluptates earum modi sed consequatur. Alias!</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold' >Learn More</button>
          </div>
        </div>
        
    </div>
  )
}

export default Anaytics
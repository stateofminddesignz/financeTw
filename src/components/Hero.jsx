import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold p-2'>Grown with DATA Analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>Grow with data </h1>
            <div>
                <p className=' md:text-5xl sm:text-4xl text-xl font-bold'>Fast,Flexible financing for </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 '>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Hero 
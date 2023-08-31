import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import{ FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hall = () => {
  return (
    <div id='hall'>
        <img className='w-full h-screen object-cover scale-x-[-1]' src="/wallpaper1.jpg" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center /* or start */ items-center'>
            <p className='sm:text-xl text-2xl text-gray-800'>Hi there👋, I'm</p>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Tomás Gauna</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Programmer/Coder',
                  2000,
                  'App Builder',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
              />
            </h2>
              <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaGithub className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
              </div> 
          </div> 
        </div>
    </div>
  )
}

export default Hall
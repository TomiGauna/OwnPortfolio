import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';

const Stack = () => {
  return (
    <div id='stack' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Technologies I Used to Use</h1>
        <div className='container stack__container grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='stack__frontend border-2 rounded-[50px] border-[#001b5e] hover:bg-gray-200'>
                <h3 className='text-center py-4 text-2xl font-bold text-center text-[#001b5e]'>Frontend Tools</h3>
                <div className='stack__content grid md: grid-cols-2 gap-4 py-2 m-[20px]'>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>HTML5</h4>
                            <SiHtml5 />
                        </div>    
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>CSS3</h4>
                            <SiCss3 />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>JavaScript</h4>
                            <SiJavascript />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>React.js</h4>
                            <SiReact />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>Bootstrap</h4>
                            <SiBootstrap />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>Material UI</h4>
                            <SiMui />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>Tailwind CSS</h4>
                            <SiTailwindcss />
                        </div>
                    </article>
                </div>
            </div>
            <div className='stack__backend border-2 rounded-[50px] border-[#001b5e] hover:bg-gray-200'>
            <h3 className='text-center text-center py-4 text-2xl font-bold text-center text-[#001b5e]'>Backend Tools</h3>
                <div className='stack__content grid md: grid-cols-2 gap-4 py-2 m-[20px]'>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1 sm: gap-[0]'>
                            <h4>Node.js</h4>
                            <SiNodedotjs />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>Express.js</h4>
                            <SiExpress />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>MongoDB</h4>
                            <SiMongodb />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>Nest.js</h4>
                            <SiNestjs />
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>Mongoose</h4>
                        </div>
                    </article>
                    <article className='stack__details flex flex-row gap-[1rem] items-center'>
                        <BsPatchCheckFill />
                        <div className='flex flex-row items-center gap-1'>
                            <h4>NPM</h4>
                            <SiNpm />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stack
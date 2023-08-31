import React from 'react';
import RandomPhoto1 from '../../assets/randomphoto1.jpg';
import RandomPhoto2 from '../../assets/randomphoto2.jpg';
import RandomPhoto3 from '../../assets/randomphoto3.jpg';
import RandomPhoto4 from '../../assets/randomphoto4.jpg';
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nobis aspernatur consequuntur enim obcaecati quo architecto dolores consectetur, quidem neque 
            aliquam magnam! Eveniet maiores ea, facere iure dolorum quo unde magnam.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={RandomPhoto1} title='App number 1' usedTechs='Javascript & Bootstrap'/>
            <ProjectItem img={RandomPhoto2} title='App number 2' usedTechs='React.js'/>
            <ProjectItem img={RandomPhoto3} title='App number 3' usedTechs='Vanilla JS & Tailwind'/>
            <ProjectItem img={RandomPhoto4} title='App number 4' usedTechs='HTML, CSS & Material UI'/>
        </div>

    </div>
  )
}

export default Projects
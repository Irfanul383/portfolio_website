import React from 'react'
import Photo from "../assets/photo.jpg"
import { IoIosArrowForward, IoLogoLinkedin, IoLogoGithub, IoIosMail, IoIosDocument } from 'react-icons/io';

const About = () => {
  return (
    <div 
    name="about"
    className='h-screen w-full bg-gradient-to-b from-teal-100 to-white'
    >
      <div
      className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px4 md:flex-row'
      >
        <div
        className='flex flex-col justify-center h-full'
        >
          <h2 className='text-3xl sm:text-3xl font-bold'>
            Third year student at Memorial University of Newfoundland with a Computer Science
            major and Mathematics Minor 
          </h2>
          <p className='text-grey-700 py-4 max-w-md'>
          Skilled in Unity game development, augmented reality, and web technologies (React, Bootstrap, and Tailwind CSS). Experienced in data optimization through SQL queries. Led a graphic design team for the Memorial University Student Volunteer Bureau and currently serving as the WebMaster for the Muslim Student Association. 
          Pursuing AWS Cloud Practitioner certification and actively working on a personal portfolio website, crafted with React and Tailwind CSS, deployed using AWS Amplify. Eager to contribute skills, creativity, and strong work ethic to innovative projects
          </p>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/irfanh383/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin size={30} className="text-black hover:text-teal-600 cursor-pointer" />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/Irfanul383" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={30} className="text-black hover:text-teal-600 cursor-pointer" />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>
            
            {/* Email */}
            <a href="mailto:irfanulhaque900@gmail.com">
              <IoIosMail size={30} className="text-black hover:text-teal-600 cursor-pointer" />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>
            
            {/* Resume PDF */}
            <a href="/General format .pdf" target="_blank" rel="noopener noreferrer">
              <IoIosDocument size={30} className="text-black hover:text-teal-600 cursor-pointer" />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>
          </div>
          <div>
          <button
            className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black text-white cursor-pointer'
            >
            Next
            <span className='group-hover:rotate-90 duration-200' >
              <IoIosArrowForward size={15} className="ml-1"/>
            </span>
          </button> 
        </div>
        </div>
        
        <div>
          <img src={Photo} alt = 'my profile' 
          className='rounded-2xl mx-auto w-1/2 md:w-3/4'
          />
        </div>    
      </div>
    </div>

  )
}

export default About
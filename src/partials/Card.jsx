import React from 'react'
import profile from '../images/htoohtet.jpeg'
import { FaGithub, FaRegEnvelope, FaLinkedin } from 'react-icons/fa'

const Card = ({ name, title, social: { github, email, linkedin } }) => {
    return (
        <div className='relative flex flex-col justify-center max-w-xs mx-auto bg-white rounded-xl p-5'>
            <div>
                <img
                    className='w-32 h-32 md:w-36 md:h-36 object-cover mx-auto shadow-xl rounded-full'
                    src={profile}
                    alt="face"
                />
            </div>
            <div className='text-center mt-5'>
                <p className='text-xl sm:text-2xl font-semibold text-gray-500'>{name}</p>
                <p className='text-base text-gray-500 pt-2 pb-4 px-4 w-auto inline-block border-b-2'>{title}</p>
                <div className='flex align-center justify-center mt-4'>
                    <a
                        className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'
                        href={github}
                    >
                        <FaGithub />
                        <span className="sr-only">Github</span>
                    </a>
                    <a
                        className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'
                        href={linkedin}
                    >
                        <FaLinkedin />
                        <span className="sr-only">Linkedin</span>
                    </a>
                    <a
                        className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'
                        href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
                    >
                        <FaRegEnvelope />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
import React from "react";
import { FaCode } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

const data = {
    name: "Htoo Htet Aung",
    title: "Developer / Cloud Enthusiast",
    socials: {
        github: "https://github.com/HtooHtetAung666",
        email: "hhawork039@gmail.com",
        linkedin: "https://www.linkedin.com/in/htoo-htet-aung-0197bb254/"
    },
    about: {
        title: "Background",
        description: "I'm Htoo Htet Aung, a programmer 🧑🏻‍💻 graduated from the University of Information Technology (UIT) in the year 2022. Currently I'm attending Master of Science Programme 📘 in Digital Transformation Technology at Mae Fah Luang University (MFU) in Thailand. I'm interested in programming since Baechlor academic days and after graduating, I worked as a web developer in IT solution companies. Not only in programming field, I have further deep dive into emerging technologies like machine learning 👾 and cloud computing subjects and I'm enjoying it. I use my lesiure time by watching youtube, listening music in soundcloud and sometimes playing computer games 🎮."
    },
    skills: [
        {
            id: 1,
            skillName: <p className='text-xl text-gray-500 font-semibold mt-4'>Programming</p>,
            skillIcon: <FaCode className='text-4xl text-gray-500 mx-auto inline-block' />
        },
        {
            id: 2,
            skillName: <p className='text-xl text-gray-500 font-semibold mt-4'>Cloud</p>,
            skillIcon: <TbCloudComputing className='text-4xl text-gray-500 mx-auto inline-block' />
        },
        {
            id: 3,
            skillName: <p className='text-xl text-gray-500 font-semibold mt-4'>AI</p>,
            skillIcon: <GiArtificialIntelligence  className='text-4xl text-gray-500 mx-auto inline-block' />
        }
    ],
    projects: [
        {
            id: 1, 
            title: "React Tailwind Portfolio",
            description: "Portfolio Template built with React and Tailwind.",
            tags: [
                "portfolio",
                "nextjs",
                "tailwindcss",
            ],
            link: "https://github.com/HtooHtetAung666/colorful-portfolio"
        },
        {
            id: 2,
            title: "Blog Site",
            description: "Blog website built with Laravel and Bootstrap",
            tags: [
                "blog",
                "laravel",
                "bootstrap",
            ],
            link: "https://github.com/HtooHtetAung666/technical-blog"
        },
        {
            id: 3,
            title: "Chat App",
            description: "Chat website built with react and firebase",
            tags: [
                "chat",
                "reactjs",
                "firebase",
            ],
            link: "https://github.com/HtooHtetAung666/simple-chat-application"
        }
    ]
}

export default data
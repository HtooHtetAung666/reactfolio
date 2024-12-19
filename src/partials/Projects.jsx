import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = ({ projects }) => {
    return (
        <div>
            <h1 className='mt-8 text-2xl md:text-4xl text-center font-bold'>Projects</h1>
            {
                projects.map(project => {
                    return (
                        <ProjectCard key={project.id} title={project.title} description={project.description} tags={project.tags} link={project.link} />
                    )
                })
            }
        </div>
    )
}

export default Projects
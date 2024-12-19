
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const ProjectCard = ({ title, description, tags, link }) => {
    return (
        <div
            className='group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-500'
        >
            <h1 className="text-xl text-center font-bold">
                {title}{" "}
                <a
                    href={link}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <FaExternalLinkAlt className="inline align-baseline" />
                </a>
            </h1>
            <hr className="my-4" />
            <p className="text-center">{description}</p>
            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                {
                    tags.map(tag => {
                        return (
                            <div className="px-4 py-1 border-2 rounded-full">{tag}</div>
                        )
                    })
                }
            </div>
            <div className="w-full text-center">
                <GitHubButton href={link} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
                {"  "}
                <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
            </div>
        </div>
    )
}

export default ProjectCard

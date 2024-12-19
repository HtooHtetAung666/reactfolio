import React from 'react'
import GitHubButton from 'react-github-btn'

const Footer = ({ github }) => {
    return (
        <div className='text-center w-full mt-16'>
            <p className="text-gray-600 mb-4">
                Made with <span role="img" aria-label="heart">💙</span> by <a className="text-[#253D63] hover:underline" href="https://github.com/HtooHtetAung666">Htoo Htet</a>
            </p>
            <GitHubButton href={github + "/portfolio"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
            &nbsp;&nbsp;
            <GitHubButton href={github + "/portfolio/fork"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
        </div>
    )
}

export default Footer
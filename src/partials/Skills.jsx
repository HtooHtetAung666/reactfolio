import React from 'react'
import SkillCard from '../components/SkillCard'

const Skills = ({ skills }) => {
  return (
    <div className='flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8'>
      {
        skills.map(skill => {
          return (
            <SkillCard key={skill.id} skillName={skill.skillName} skillIcon={skill.skillIcon} />
          )
        })
      }
    </div>
  )
}

export default Skills
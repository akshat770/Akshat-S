import React from 'react'

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
    'Express.js', 'Node.js', 'MongoDB', 'Git', 'C', 'C++', 'Java'
  ];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li 
            key={skill} 
            className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 border border-white/10 whitespace-nowrap"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

import { useState } from 'react'
import CodeFileWrapper from '@/components/CodeFileWrapper'

export default function Career() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0)

  const experiences = [
    {
      company: 'Meta',
      role: 'Software Engineer - Capacity',
      period: 'May 2025 - Present',
      location: 'Menlo Park, CA',
      description: [
        'Building infrastructure solutions in the Capacity organization (Management & Fulfillment) with a focus on regionalization',
      ],
      technologies: ['Infrastructure', 'Regionalization', 'Hack', 'Python', 'C++'],
    },
    {
      company: 'TikTok',
      role: 'Software Engineer - Effects',
      period: 'April 2024 - May 2025',
      location: 'San Jose, CA',
      description: [
        'Developed creative tools and filters on the Effects team, enhancing content creation for millions of TikTok users',
        'Owned and delivered AI Generated Effects (AIGE) feature on TikTok Effect House',
        'Collaborated with cross-functional teams across product, design, and engineering to ship innovative features',
      ],
      technologies: ['Go', 'TypeScript', 'Infrastructure'],
    },
    {
      company: 'Sparrow Labs',
      role: 'Software Engineer',
      period: 'June 2022 - March 2024',
      location: 'New York, NY',
      description: [
        'Developed full-stack applications serving enterprise clients',
        'Architected cloud infrastructure on AWS for high-availability systems',
        'Led technical initiatives and mentored junior developers',
      ],
      technologies: ['React', 'Node.js', 'AWS Lambda', 'DynamoDB'],
    },
    {
      company: 'Capital One',
      role: 'Software Engineering Intern',
      period: 'June 2021 - August 2021',
      location: 'McLean, VA',
      description: [
        'Built internal tools to improve developer productivity',
        'Worked on cloud migration projects using AWS services',
        'Collaborated with senior engineers on production systems',
      ],
      technologies: ['Java', 'AWS'],
    },
    {
      company: 'Sparrow Labs',
      role: 'Software Engineering Intern',
      period: 'December 2020 - May 2022',
      location: 'Remote',
      description: [
        'Built credit pull flow that fetched and analyzed credit data for prequalifying users across 17+ student loan providers',
        'Developed full-stack features using modern web development practices and cloud infrastructure',
      ],
      technologies: ['Java', 'AWS'],
    },
  ]

  const education = {
    school: 'Duke University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2018 - 2022',
    location: 'Durham, NC',
  }

  const importsSection = (
    <>
      <p className="text-terminal-purple">
        <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
        <span className="text-terminal-blue">useState</span> <span className="text-terminal-text">{`}`}</span>
        <span className="text-terminal-purple"> from </span>
        <span className="text-terminal-orange">'react'</span>
      </p>
      <p className="text-terminal-purple">
        <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
        <span className="text-terminal-blue">Experience</span><span className="text-terminal-text">, </span>
        <span className="text-terminal-blue">Timeline</span> <span className="text-terminal-text">{`}`}</span>
        <span className="text-terminal-purple"> from </span>
        <span className="text-terminal-orange">'@/components/Timeline'</span>
      </p>
    </>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-terminal-bgLight rounded-lg border border-terminal-border p-4 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-terminal-bright mb-4 break-words">
          <span className="text-terminal-comment">/*</span> Career <span className="text-terminal-comment">*/</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-terminal-text font-mono break-words">
          <span className="text-terminal-comment">// </span>My professional journey in software engineering.
        </p>
      </div>

      {/* Career Code File */}
      <CodeFileWrapper
        filename="Career.tsx"
        lineCount={187}
        imports={importsSection}
        functionName="CareerTimeline"
      >
        {/* Experience Timeline */}
        <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-terminal-bgLight rounded-lg border border-terminal-border overflow-hidden hover:border-terminal-cyan hover:shadow-lg hover:shadow-terminal-cyan/20 transition-all duration-300"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => setExpandedRole(expandedRole === index ? null : index)}
              className="w-full p-6 text-left hover:bg-terminal-bgLighter transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold text-terminal-bright mb-1">
                    <span className="text-terminal-cyan">&gt;</span> {exp.company}
                  </h3>
                  <p className="text-lg text-terminal-yellow font-mono font-medium mb-2">
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-terminal-comment font-mono">
                    <span className="flex items-center gap-1">
                      <span className="text-terminal-blue">📅</span>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-terminal-green">📍</span>
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="ml-4 text-terminal-cyan font-mono">
                  {expandedRole === index ? '[-]' : '[+]'}
                </div>
              </div>
            </button>

            {/* Expandable Content */}
            {expandedRole === index && (
              <div className="px-6 pb-6 space-y-4 border-t border-terminal-border">
                {/* Description */}
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-terminal-text text-sm font-mono">
                      <span className="text-terminal-cyan mr-2 mt-1">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div>
                  <p className="text-sm font-mono font-semibold text-terminal-purple mb-2">
                    <span className="text-terminal-purple">const</span> <span className="text-terminal-blue">tech</span> = [
                  </p>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-terminal-bg text-terminal-cyan text-xs font-mono rounded border border-terminal-border"
                      >
                        "{tech}"
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-mono text-terminal-purple mt-1">];</p>
                </div>
              </div>
            )}
          </div>
        ))}
        </div>
      </CodeFileWrapper>

      {/* Education Code File */}
      <CodeFileWrapper
        filename="Education.tsx"
        lineCount={85}
        imports={
          <>
            <p className="text-terminal-purple">
              <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
              <span className="text-terminal-blue">Degree</span><span className="text-terminal-text">, </span>
              <span className="text-terminal-blue">University</span> <span className="text-terminal-text">{`}`}</span>
              <span className="text-terminal-purple"> from </span>
              <span className="text-terminal-orange">'@/types/education'</span>
            </p>
          </>
        }
        functionName="MyEducation"
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl sm:text-4xl">🎓</div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-terminal-bright mb-1 break-words">
              {education.school}
            </h3>
            <p className="text-base sm:text-lg text-terminal-cyan font-mono font-medium mb-2 break-words">
              {education.degree}
            </p>
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-terminal-comment font-mono">
              <span className="flex items-center gap-1">
                <span className="text-terminal-blue">📅</span>
                {education.period}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-terminal-green">📍</span>
                {education.location}
              </span>
            </div>
          </div>
        </div>
      </CodeFileWrapper>
    </div>
  )
}

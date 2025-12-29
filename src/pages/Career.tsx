import { useState } from 'react'

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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Career
        </h1>
        <p className="text-lg text-gray-600">
          My professional journey in software engineering, from internships to
          full-time roles at leading tech companies.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => setExpandedRole(expandedRole === index ? null : index)}
              className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-2">
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span>📅</span>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📍</span>
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="ml-4 text-gray-400">
                  {expandedRole === index ? (
                    <span className="text-2xl">⬆️</span>
                  ) : (
                    <span className="text-2xl">⬇️</span>
                  )}
                </div>
              </div>
            </button>

            {/* Expandable Content */}
            {expandedRole === index && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
                {/* Description */}
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-primary-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Education
        </h2>
        <div className="flex items-start gap-4">
          <div className="text-4xl">🎓</div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              {education.school}
            </h3>
            <p className="text-lg text-primary-600 font-medium mb-2">
              {education.degree}
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span>📅</span>
                {education.period}
              </span>
              <span className="flex items-center gap-1">
                <span>📍</span>
                {education.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

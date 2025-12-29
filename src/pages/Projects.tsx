export default function Projects() {
  const projects = [
    {
      id: 'networth-tracker',
      title: 'Networth Tracking Tool',
      status: 'WIP',
      description: 'A manual networth tracking web application for detailed financial oversight. Users can track assets and liabilities across multiple categories with granular breakdowns. Features hourly-cached equity prices for real-time accuracy and historical day-end snapshots.',
      features: [
        'Manual & historical data updates with forward propagation',
        'Batch transaction chains (e.g., sell Asset A → buy Asset B)',
        'Comprehensive asset/liability categorization',
        'Historical networth visualization',
        'Hourly price updates for equity assets',
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'SST', 'DynamoDB', 'JWT Auth', 'Route53'],
      link: undefined,
      github: undefined,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600">
          A collection of projects I've built and contributed to. Each project represents
          a unique challenge and learning opportunity.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            id={project.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow scroll-mt-20"
          >
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-display font-semibold text-gray-900">
                {project.title}
              </h3>
              {project.status && (
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links - Only show if they exist */}
            {(project.link || project.github) && (
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <span>→</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

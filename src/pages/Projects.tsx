import CodeFileWrapper from '@/components/CodeFileWrapper'

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
      filename: 'NetworthTracker.tsx',
      functionName: 'NetworthTracker',
      lineCount: 342,
      imports: (
        <>
          <p className="text-terminal-purple">
            <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
            <span className="text-terminal-blue">useState</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">useEffect</span> <span className="text-terminal-text">{`}`}</span>
            <span className="text-terminal-purple"> from </span>
            <span className="text-terminal-orange">'react'</span>
          </p>
          <p className="text-terminal-purple">
            <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
            <span className="text-terminal-blue">DynamoDB</span> <span className="text-terminal-text">{`}`}</span>
            <span className="text-terminal-purple"> from </span>
            <span className="text-terminal-orange">'aws-sdk'</span>
          </p>
          <p className="text-terminal-purple">
            <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
            <span className="text-terminal-blue">Asset</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">Liability</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">NetworthSnapshot</span> <span className="text-terminal-text">{`}`}</span>
            <span className="text-terminal-purple"> from </span>
            <span className="text-terminal-orange">'@/types/finance'</span>
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-terminal-bgLight rounded-lg border border-terminal-border p-4 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-terminal-bright mb-4 break-words">
          <span className="text-terminal-comment">/*</span> Projects <span className="text-terminal-comment">*/</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-terminal-text font-mono break-words">
          <span className="text-terminal-comment">// </span>A collection of projects I've built and contributed to.
        </p>
      </div>

      {/* Project Code Files - Each project gets its own file */}
      {projects.map((project) => (
        <CodeFileWrapper
          key={project.id}
          filename={project.filename}
          lineCount={project.lineCount}
          imports={project.imports}
          functionName={project.functionName}
        >
          <div id={project.id} className="scroll-mt-20">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-terminal-bright">
                <span className="text-terminal-cyan">&gt;</span> {project.title}
              </h3>
              {project.status && (
                <span className="px-3 py-1 bg-terminal-bg text-terminal-yellow text-xs font-mono font-semibold rounded border border-terminal-yellow">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-terminal-text mb-4 leading-relaxed font-mono text-xs sm:text-sm break-words">
              <span className="text-terminal-comment">// </span>{project.description}
            </p>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4 p-3 bg-terminal-bg rounded border border-terminal-border">
                <h4 className="text-xs sm:text-sm font-mono font-semibold text-terminal-yellow mb-2">
                  <span className="text-terminal-purple">const</span> features = [
                </h4>
                <ul className="space-y-1 pl-4">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-terminal-text text-xs font-mono flex items-start gap-2">
                      <span className="text-terminal-cyan mt-1">-</span>
                      <span><span className="text-terminal-orange">"{feature}"</span>,</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm font-mono text-terminal-purple mt-1">];</p>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-terminal-bg text-terminal-cyan text-xs font-mono font-medium rounded border border-terminal-border"
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
                    className="text-terminal-blue hover:text-terminal-cyan font-mono text-sm flex items-center gap-1 transition-colors"
                  >
                    <span>view()</span>
                    <span>→</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-terminal-green hover:text-terminal-cyan font-mono text-sm flex items-center gap-1 transition-colors"
                  >
                    <span>github()</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </CodeFileWrapper>
      ))}
    </div>
  )
}

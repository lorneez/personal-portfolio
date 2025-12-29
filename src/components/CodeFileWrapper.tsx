import { ReactNode } from 'react'

interface CodeFileWrapperProps {
  filename: string
  lineCount: number
  imports?: ReactNode
  functionName: string
  children: ReactNode
}

export default function CodeFileWrapper({
  filename,
  lineCount,
  imports,
  functionName,
  children,
}: CodeFileWrapperProps) {
  return (
    <div className="bg-terminal-bgLight rounded-lg border border-terminal-border p-4 sm:p-8 md:p-12 overflow-hidden">
      {/* File Tab Header */}
      <div className="flex items-center justify-between mb-6 -mt-2 sm:-mt-4 md:-mt-6 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 py-2 bg-terminal-bg border-b border-terminal-border">
        <div className="flex items-center gap-2 px-3 py-1 bg-terminal-bgLight border-t-2 border-terminal-cyan rounded-t text-xs sm:text-sm font-mono">
          <span className="text-terminal-text">{filename}</span>
        </div>
        <div className="text-xs text-terminal-comment font-mono hidden sm:block">
          TypeScript JSX • {lineCount} lines
        </div>
      </div>

      {/* Import Statements (optional) */}
      {imports && (
        <div className="mb-6 space-y-1 text-xs sm:text-sm font-mono">
          {imports}
        </div>
      )}

      {/* Function Declaration */}
      <h2 className="text-xl sm:text-2xl font-display font-bold text-terminal-yellow mb-4">
        <span className="text-terminal-purple">export function</span>{' '}
        <span className="text-terminal-yellow">{functionName}</span>
        <span className="text-terminal-text">() {`{`}</span>
      </h2>

      {/* Function Content */}
      <div className="pl-4 sm:pl-6 space-y-4 text-terminal-text leading-relaxed font-mono text-xs sm:text-sm overflow-x-auto break-words">
        <p className="text-terminal-purple">
          <span className="text-terminal-purple">return</span>{' '}
          <span className="text-terminal-text">{`{`}</span>
        </p>

        <div className="pl-4 sm:pl-6 space-y-4">
          {children}
        </div>

        {/* Close return statement */}
        <p className="text-terminal-text pl-4 sm:pl-6">{`}`}</p>
      </div>

      {/* Close function */}
      <div className="text-xl sm:text-2xl font-display font-bold text-terminal-text mt-4">
        {`}`}
      </div>
    </div>
  )
}

import { Link, useRoute } from 'wouter';
import { getProjects, getProjectBySlug } from '@/lib/projects';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ExternalLink, Calendar, CheckCircle2, CircleDashed } from 'lucide-react';

export default function Projects() {
  const [match, params] = useRoute('/projects/:slug');

  if (match && params.slug) {
    const project = getProjectBySlug(params.slug);
    
    if (!project) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
          <div className="font-mono text-destructive uppercase">Project not found</div>
          <Link href="/projects" className="text-primary hover:underline font-mono text-sm">
            Back to Projects
          </Link>
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>
        
        <header className="mb-10 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono mb-4 text-muted-foreground">
            <span className="flex items-center gap-1.5 border border-border px-2 py-1 bg-card">
              <Calendar className="w-3 h-3" /> {project.date}
            </span>
            <span className="flex items-center gap-1.5 border border-border px-2 py-1 bg-card">
              {project.status === 'Complete' ? <CheckCircle2 className="w-3 h-3 text-muted-foreground" /> : <CircleDashed className="w-3 h-3 text-primary" />}
              <span className={project.status === 'Complete' ? 'text-muted-foreground' : 'text-primary'}>
                {project.status.toUpperCase()}
              </span>
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono bg-secondary px-2 py-1 text-secondary-foreground border border-secondary-border">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-invert max-w-none pb-20 prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-pre:bg-card prose-pre:border prose-pre:border-border prose-hr:border-border prose-strong:text-foreground">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </article>
      </div>
    );
  }

  const projects = getProjects();

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 border-b border-border pb-6">
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">§ 02 — PROJECT REGISTER</span>
        <h1 className="text-4xl font-bold tracking-tight">PROJECTS</h1>
        <p className="text-muted-foreground mt-4 font-mono text-sm max-w-2xl uppercase">
          Schematics, simulations, and hardware implementations.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, idx) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group relative border border-border bg-card p-6 sm:p-8 hover:border-primary/50 transition-colors block"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-border group-hover:bg-primary transition-colors"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 tracking-tight">
                {project.title}
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <span className="font-mono text-xs text-muted-foreground flex-shrink-0">
                {project.date}
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 bg-background">
                    {tag}
                  </span>
                ))}
              </div>
              <span className={`text-xs font-mono flex items-center gap-1.5 ${project.status === 'Complete' ? 'text-muted-foreground' : 'text-primary'}`}>
                {project.status === 'Complete' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <CircleDashed className="w-3.5 h-3.5" />}
                {project.status.toUpperCase()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

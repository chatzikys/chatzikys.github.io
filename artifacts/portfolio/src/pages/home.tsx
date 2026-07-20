import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-14rem)] max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-4">
        <span className="font-mono text-primary text-sm tracking-widest uppercase">DOC-001 / PERSONAL RECORD</span>
      </div>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 uppercase">
        FIRSTNAME <br/>
        LASTNAME
      </h1>
      
      <div className="h-[1px] w-full bg-border my-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary"></div>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-mono text-muted-foreground mb-8">
        Electrical Engineering Student <span className="text-primary px-2">|</span> Power Systems
      </h2>
      
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
        Specializing in power distribution, conversion topologies, and grid integration. Building robust, efficient systems from simulation to printed circuit boards.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-sm border border-border p-6 bg-card/30 backdrop-blur-sm">
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground border-b border-border/50 pb-2 mb-1">EMAIL</span>
          <a href="mailto:placeholder@example.com" className="hover:text-primary transition-colors flex items-center justify-between group">
            user@domain.ext <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground border-b border-border/50 pb-2 mb-1">GITHUB</span>
          <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
            github.com/user <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground border-b border-border/50 pb-2 mb-1">LINKEDIN</span>
          <a href="#" className="hover:text-primary transition-colors flex items-center justify-between group">
            in/user <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-14rem)] max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 uppercase">
        STEFANOS <br/>
        CHATZIKYRIAKOU
      </h1>
      
      <div className="h-[1px] w-full bg-border my-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary"></div>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-mono text-muted-foreground mb-8">
        Electrical &amp; Computer Engineering Student <span className="text-primary px-2">|</span> Power Systems
      </h2>
      
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
        Studying at Aristotle University of Thessaloniki, with hands-on experience in electrical installations, industrial maintenance, and power systems. Interested in medium &amp; high voltage, electrical protection, and industrial power distribution.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm border border-border p-6 bg-card/30 backdrop-blur-sm">
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground border-b border-border/50 pb-2 mb-1">LOCATION</span>
          <span className="text-foreground">Thessaloniki, Greece</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground border-b border-border/50 pb-2 mb-1">LINKEDIN</span>
          <a href="https://www.linkedin.com/in/stefanos-chatzikyriakou/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
            <span className="truncate">stefanos-chatzikyriakou</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

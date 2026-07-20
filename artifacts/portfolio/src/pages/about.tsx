import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-12">
        <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">SEC_01</span>
        <h1 className="text-4xl font-bold tracking-tight">OPERATOR_BIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 md:gap-12 items-start">
        <div className="space-y-6">
          <div className="aspect-square w-full md:w-[250px] bg-card border border-border flex items-center justify-center relative overflow-hidden group mx-auto md:mx-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary m-2"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary m-2"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary m-2"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary m-2"></div>
            
            <span className="font-mono text-6xl font-light tracking-tighter text-muted-foreground group-hover:text-primary transition-colors">FL</span>
          </div>
          
          <div className="font-mono text-sm border border-border bg-card p-4 space-y-2">
            <div className="flex justify-between border-b border-border/50 pb-1">
              <span className="text-muted-foreground">STATUS:</span>
              <span className="text-primary">ACTIVE</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-1">
              <span className="text-muted-foreground">LOC:</span>
              <span>SITE_74</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">ROLE:</span>
              <span>EE_STDNT</span>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-border pb-2 uppercase">
              <Terminal className="w-5 h-5 text-primary" /> _Initialize
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an electrical engineering student with a deep fascination for the physical infrastructure that powers our world. While software eats the world, hardware still has to power the servers. 
              </p>
              <p>
                My focus lies at the intersection of power electronics, control systems, and grid modernization. I build physical systems, simulate complex grid interactions, and write code that talks directly to silicon.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-border pb-2 uppercase">
              <Terminal className="w-5 h-5 text-primary" /> _Current_Work
            </h2>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex gap-4 p-4 border border-border bg-card/30">
                <span className="text-primary mt-1">[{'>'}]</span>
                <div>
                  <strong className="text-foreground font-sans text-base block mb-1">Senior Capstone: Bidirectional EV Charger</strong>
                  <span className="text-muted-foreground leading-relaxed block">Designing a 6.6kW onboard charger with V2G (Vehicle-to-Grid) capabilities using SiC MOSFETs.</span>
                </div>
              </li>
              <li className="flex gap-4 p-4 border border-border bg-card/30">
                <span className="text-primary mt-1">[{'>'}]</span>
                <div>
                  <strong className="text-foreground font-sans text-base block mb-1">Embedded Systems Lab</strong>
                  <span className="text-muted-foreground leading-relaxed block">Writing a real-time operating system (RTOS) scheduler for ARM Cortex-M4 from scratch.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-border pb-2 uppercase">
              <Terminal className="w-5 h-5 text-primary" /> _Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Renewable Integration', 'Motor Control', 'PCB Layout', 'FPGA Prototyping', 'Audio Amplifiers', 'Energy Storage'].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono border border-border">
                  {interest}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

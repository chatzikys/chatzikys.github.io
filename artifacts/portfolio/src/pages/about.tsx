import { Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">ABOUT</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 md:gap-12 items-start">
        <div className="space-y-6">
          <div className="aspect-square w-full md:w-[250px] bg-card border border-border flex items-center justify-center relative overflow-hidden group mx-auto md:mx-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary m-2"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary m-2"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary m-2"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary m-2"></div>
            
            <span className="font-mono text-6xl font-light tracking-tighter text-muted-foreground group-hover:text-primary transition-colors">SC</span>
          </div>
          
          <div className="font-mono text-sm border border-border bg-card p-4 space-y-2">
            <div className="flex justify-between border-b border-border/50 pb-1">
              <span className="text-muted-foreground">UNIVERSITY:</span>
              <span className="text-primary">AUTH</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-1">
              <span className="text-muted-foreground">DEGREE:</span>
              <span>B.Sc. ECE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">LOCATION:</span>
              <span>Thessaloniki</span>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-border pb-2 uppercase">
              <Zap className="w-5 h-5 text-primary" /> Overview
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Electrical &amp; Computer Engineering student at Aristotle University of Thessaloniki (AUTH), with hands-on experience in electrical installations, industrial maintenance, technical sales, and power systems.
              </p>
              <p>
                Alongside my studies I have worked as a freelance electrical technician — residential installations, structured cabling, troubleshooting, and maintenance — and part-time in technical sales, helping contractors select electrical equipment. I am currently doing an engineering internship focused on power systems, developing skills in electrical assemblies, schematic interpretation, testing, and industrial power distribution.
              </p>
              <p>
                I enjoy connecting theory with real-world applications and continuously expanding my technical knowledge.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-border pb-2 uppercase">
              <Zap className="w-5 h-5 text-primary" /> Current Work
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-4 p-4 border border-border bg-card/30">
                <span className="text-primary mt-1 font-mono">—</span>
                <div>
                  <strong className="text-foreground font-sans text-base block mb-1">Electrical Engineering Intern — AMPPE S.A.</strong>
                  <span className="text-muted-foreground leading-relaxed block">Installation, testing, and maintenance of Medium- and High-Voltage substations. Schematic interpretation, commissioning, and industrial power distribution maintenance. <span className="text-primary font-mono text-xs">Jul 2026 – Present</span></span>
                </div>
              </li>
              <li className="flex gap-4 p-4 border border-border bg-card/30">
                <span className="text-primary mt-1 font-mono">—</span>
                <div>
                  <strong className="text-foreground font-sans text-base block mb-1">Sales Associate — myFOS O.E.</strong>
                  <span className="text-muted-foreground leading-relaxed block">Technical sales of electrical equipment, switchgear, and lighting systems. Advising electricians, contractors, and engineers on product selection and installation practices. <span className="text-primary font-mono text-xs">Feb 2024 – Present</span></span>
                </div>
              </li>
              <li className="flex gap-4 p-4 border border-border bg-card/30">
                <span className="text-primary mt-1 font-mono">—</span>
                <div>
                  <strong className="text-foreground font-sans text-base block mb-1">Freelance Electrical Technician</strong>
                  <span className="text-muted-foreground leading-relaxed block">Residential installations, structured cabling, FTTH infrastructure, panel upgrades, fault diagnosis and repairs. <span className="text-primary font-mono text-xs">Jul 2022 – Present</span></span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-border pb-2 uppercase">
              <Zap className="w-5 h-5 text-primary" /> Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Power Systems', 'Medium & High Voltage', 'Electrical Protection', 'Surge & Lightning Protection', 'Industrial Electrical Engineering', 'Power Distribution'].map((interest) => (
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

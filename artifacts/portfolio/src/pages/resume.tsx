import { Printer } from 'lucide-react';

export default function Resume() {
  const printPage = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 print:hidden border-b border-border pb-6 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">RESUME</h1>
        </div>
        <button 
          onClick={printPage}
          className="flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm px-4 py-2 hover:bg-primary/90 transition-colors uppercase font-bold"
        >
          <Printer className="w-4 h-4" /> Download PDF
        </button>
      </div>

      <div className="bg-card text-foreground p-8 sm:p-12 border border-border print:border-none print:p-0 print:bg-transparent print:text-black">
        {/* Print Layout */}
        <div className="font-sans">
          
          <header className="border-b-2 border-primary print:border-black pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">STEFANOS CHATZIKYRIAKOU</h1>
              <h2 className="text-lg font-mono text-muted-foreground print:text-gray-600">Electrical &amp; Computer Engineering Student</h2>
            </div>
            <div className="sm:text-right font-mono text-sm space-y-1 text-muted-foreground print:text-gray-600">
              <p>Thessaloniki, Greece</p>
              <p>chatzikys.github.io</p>
            </div>
          </header>

          <section className="mb-8">
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">01 // Education</h3>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-4 pl-4">
              <div className="font-bold text-lg">Aristotle University of Thessaloniki (AUTH)</div>
              <div className="font-mono text-sm self-center">In Progress</div>
              <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Bachelor of Science in Electrical &amp; Computer Engineering</div>
              <div className="text-sm col-span-2 mt-2 leading-relaxed text-muted-foreground print:text-gray-800">
                <span className="font-bold text-foreground print:text-black">Relevant Coursework:</span> Power Systems, Power Electronics, Control Systems, Signals &amp; Systems, Circuit Analysis, Electromagnetic Fields, High Voltage Engineering.
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">02 // Experience</h3>
            
            <div className="mb-6 pl-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">Power Systems Engineering Internship</div>
                <div className="font-mono text-sm self-center">Current</div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Electrical Engineering Intern</div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>Developing practical skills in electrical assemblies, schematic interpretation, and industrial power distribution.</li>
                <li>Performing testing and commissioning tasks on power systems equipment.</li>
              </ul>
            </div>

            <div className="mb-6 pl-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">Freelance Electrical Technician</div>
                <div className="font-mono text-sm self-center">Ongoing</div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Self-employed</div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>Residential electrical installations, structured cabling, troubleshooting, and electrical maintenance.</li>
              </ul>
            </div>

            <div className="mb-6 pl-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">Technical Sales (Part-time)</div>
                <div className="font-mono text-sm self-center">Ongoing</div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Electrical Equipment Retail</div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>Helping contractors and customers select electrical equipment and providing technical support.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">03 // Technical Skills</h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm pl-4 leading-relaxed">
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">Areas:</div>
              <div>Power Systems, Medium &amp; High Voltage, Electrical Protection, Surge &amp; Lightning Protection, Industrial Power Distribution</div>
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">Practical:</div>
              <div>Electrical Installations, Structured Cabling, Schematic Interpretation, Equipment Testing &amp; Commissioning, Panel Wiring</div>
            </div>
          </section>
          
          <section>
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">04 // Certifications</h3>
            <ul className="list-disc list-outside text-sm space-y-2 ml-8 text-muted-foreground print:text-gray-800">
              <li>B.Sc. Electrical &amp; Computer Engineering — Aristotle University of Thessaloniki (In Progress)</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}

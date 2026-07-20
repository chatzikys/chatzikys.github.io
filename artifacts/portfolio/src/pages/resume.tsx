import { Printer } from 'lucide-react';

export default function Resume() {
  const printPage = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 print:hidden border-b border-border pb-6 gap-4">
        <div>
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">SEC_03</span>
          <h1 className="text-4xl font-bold tracking-tight">RESUME_DAT</h1>
        </div>
        <button 
          onClick={printPage}
          className="flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm px-4 py-2 hover:bg-primary/90 transition-colors uppercase font-bold"
        >
          <Printer className="w-4 h-4" /> Print_PDF
        </button>
      </div>

      <div className="bg-card text-foreground p-8 sm:p-12 border border-border print:border-none print:p-0 print:bg-transparent print:text-black">
        {/* Print Layout */}
        <div className="font-sans">
          
          <header className="border-b-2 border-primary print:border-black pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">FIRSTNAME LASTNAME</h1>
              <h2 className="text-lg font-mono text-muted-foreground print:text-gray-600">Electrical Engineering Student</h2>
            </div>
            <div className="sm:text-right font-mono text-sm space-y-1 text-muted-foreground print:text-gray-600">
              <p>first.last@example.com</p>
              <p>(555) 123-4567</p>
              <p>linkedin.com/in/user</p>
              <p>github.com/user</p>
            </div>
          </header>

          <section className="mb-8">
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">01 // Education</h3>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-4 pl-4">
              <div className="font-bold text-lg">University of Engineering Technology</div>
              <div className="font-mono text-sm self-center">May 2025</div>
              <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Bachelor of Science in Electrical Engineering</div>
              <div className="text-sm col-span-2 mt-2 leading-relaxed text-muted-foreground print:text-gray-800">
                <span className="font-bold text-foreground print:text-black">Relevant Coursework:</span> Power Systems, Power Electronics, Control Systems, Signals & Systems, Circuit Analysis, Electromagnetic Fields.
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">02 // Experience</h3>
            
            <div className="mb-6 pl-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">Energy Grid Solutions Inc.</div>
                <div className="font-mono text-sm self-center">May 2023 - Aug 2023</div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Power Systems Intern</div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>Assisted in power flow analysis and short-circuit studies using ETAP for a 50MW solar farm integration.</li>
                <li>Developed automated MATLAB scripts to parse daily load profiles, reducing analysis time by 40%.</li>
                <li>Drafted one-line diagrams and panel schedules under the supervision of a licensed PE.</li>
              </ul>
            </div>

            <div className="mb-6 pl-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">University Robotics Lab</div>
                <div className="font-mono text-sm self-center">Sep 2022 - Present</div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">Undergraduate Research Assistant</div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>Designed a customized 24V motor drive PCB focusing on thermal management and EMI reduction.</li>
                <li>Programmed STM32 microcontrollers in C for closed-loop vector control of BLDC motors.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">03 // Technical Skills</h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm pl-4 leading-relaxed">
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">Software:</div>
              <div>MATLAB/Simulink, Altium Designer, LTspice, ETAP, AutoCAD Electrical, C/C++, Python</div>
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">Hardware:</div>
              <div>Oscilloscopes, Logic Analyzers, PCB Soldering, Microcontrollers (STM32, TI C2000)</div>
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">Topics:</div>
              <div>DC-DC Converters, Inverter Design, Motor Control, Grid Simulation, Control Theory</div>
            </div>
          </section>
          
          <section>
            <h3 className="text-sm font-bold tracking-widest uppercase font-mono mb-4 text-primary print:text-black border-l-2 border-primary pl-3">04 // Certifications</h3>
            <ul className="list-disc list-outside text-sm space-y-2 ml-8 text-muted-foreground print:text-gray-800">
              <li>Engineer In Training (EIT) - Passed FE Electrical and Computer Exam (Dec 2023)</li>
              <li>OSHA 10-Hour General Industry Certification</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}

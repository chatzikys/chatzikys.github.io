import { Printer } from "lucide-react";

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

      <div className="bg-card text-foreground p-8 sm:p-12 border border-border print:border-none print:px-10 print:py-0 print:bg-transparent print:text-black">
        {/* Print Layout */}
        <div className="font-sans">
          <header className="border-b-2 border-primary print:border-gray-800 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="flex items-center gap-6">
              {/* Profile photo placeholder */}
              <div className="w-28 h-28 border border-border print:border-gray-400 flex items-center justify-center flex-shrink-0 bg-card print:bg-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary print:border-gray-400 m-1.5"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary print:border-gray-400 m-1.5"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary print:border-gray-400 m-1.5"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary print:border-gray-400 m-1.5"></div>
                <span className="font-mono text-3xl font-light text-muted-foreground print:text-gray-500">
                  <img
                    src="/profile.jpg"
                    alt="SC"
                    className="w-full h-full object-cover print:grayscale"
                  />
                </span>
              </div>
              <div>
                <h1 className="text-lg sm:text-3xl print:text-4xl font-bold uppercase tracking-tight mb-2 break-words">
                  STEFANOS CHATZIKYRIAKOU
                </h1>
                <h2 className="text-sm sm:text-lg font-mono text-muted-foreground print:text-gray-600">
                  Electrical &amp; Computer Engineering Student
                </h2>
              </div>
            </div>
            <div className="sm:text-right font-mono text-sm space-y-1 text-muted-foreground print:text-gray-600">
              <p>Thessaloniki, Greece</p>
              <p>linkedin.com/in/stefanos-chatzikyriakou</p>
              <p>chatzikys.github.io</p>
            </div>
          </header>

          <section className="mb-8 print:pt-6">
            <h3 className="text-base font-bold tracking-widest uppercase mb-4 border-b border-border print:border-gray-300 pb-2 print:text-black">
              Experience
            </h3>

            <div className="mb-6 pl-4 break-inside-avoid print:pt-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">AMPPE S.A.</div>
                <div className="font-mono text-sm self-center">
                  Jul 2026 – Aug 2026
                </div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">
                  Electrical Engineering Intern
                </div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>
                  Supported preventive maintenance on medium-voltage
                  substations, performing equipment cleaning and comprehensive
                  electrical testing.
                </li>
                <li>
                  Carried out diagnostic measurements, including insulation
                  resistance, winding resistance, turns ratio, and HV–LV
                  isolation resistance.
                </li>
                <li>
                  Collected samples and performed dielectric oil testing to
                  assess transformer insulation integrity.
                </li>
                <li>
                  Conducted general electrical installation inspections.
                </li>
                <li>
                  Interpreted electrical schematics, single-line diagrams, and
                  technical documentation.
                </li>
                <li>
                  Participated in electrical assembly and commissioning
                  activities.
                </li>
                <li>
                  Followed engineering safety procedures and industry standards
                  while working in industrial environments.
                </li>
              </ul>
            </div>

            <div className="mb-6 pl-4 break-inside-avoid print:pt-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">myFOS O.E.</div>
                <div className="font-mono text-sm self-center">
                  Feb 2024 – Present
                </div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">
                  Sales Associate (Part-time)
                </div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>
                  Advise electricians, contractors, and engineers on electrical
                  equipment, switchgear, lighting systems, and installation
                  materials.
                </li>
                <li>
                  Recommend products based on technical specifications and
                  project requirements.
                </li>
                <li>
                  Provide technical support regarding installation practices and
                  product selection.
                </li>
              </ul>
            </div>

            <div className="mb-6 pl-4 break-inside-avoid print:pt-4">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-2">
                <div className="font-bold text-lg">Self-employed</div>
                <div className="font-mono text-sm self-center">
                  Jul 2022 – Present
                </div>
                <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">
                  Freelance Electrical Technician
                </div>
              </div>
              <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-muted-foreground print:text-gray-800 leading-relaxed">
                <li>
                  Install, maintain, and troubleshoot residential electrical
                  installations.
                </li>
                <li>Perform electrical fault diagnosis and repairs.</li>
                <li>Install structured cabling and FTTH infrastructure.</li>
                <li>
                  Carry out electrical panel upgrades, lighting installations,
                  and wiring modifications.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8 break-inside-avoid print:pt-6">
            <h3 className="text-base font-bold tracking-widest uppercase mb-4 border-b border-border print:border-gray-300 pb-2 print:text-black">
              Education
            </h3>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-4 pl-4 break-inside-avoid">
              <div className="font-bold text-lg">
                Aristotle University of Thessaloniki (AUTH)
              </div>
              <div className="font-mono text-sm self-center">2022 – 2027</div>
              <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">
                Master of Engineering, Electrical &amp; Computer Engineering
              </div>
              <div className="text-sm col-span-2 mt-2 leading-relaxed text-muted-foreground print:text-gray-800">
                <span className="font-bold text-foreground print:text-black">
                  Focus:
                </span>{" "}
                Power Systems &amp; High Voltage Engineering — power generation,
                transmission &amp; distribution, HV systems, and electrical
                protection.
              </div>
              <div className="text-sm col-span-2 leading-relaxed text-muted-foreground print:text-gray-800">
                <span className="font-bold text-foreground print:text-black">
                  Coursework:
                </span>{" "}
                High Voltage Engineering, Lightning Protection &amp; Grounding
                Systems, Transmission &amp; Distribution of Electric Energy,
                Power Plant Systems, Power Electronics.
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-4 pl-4 break-inside-avoid">
              <div className="font-bold text-lg">
                1st Vocational High School of Neapoli
              </div>
              <div className="font-mono text-sm self-center">2019 – 2022</div>
              <div className="text-muted-foreground print:text-gray-700 col-span-2 text-base">
                Technician in Electrical Systems, Installations &amp; Networks
              </div>
              <div className="text-sm col-span-2 mt-2 leading-relaxed text-muted-foreground print:text-gray-800">
                <span className="font-bold text-foreground print:text-black">
                  Grade:
                </span>{" "}
                19.5 / 20 — Electrical installations &amp; wiring, panels &amp;
                protection devices, electrical machines &amp; automation.
              </div>
            </div>
          </section>

          <section className="mb-8 break-inside-avoid print:pt-6">
            <h3 className="text-base font-bold tracking-widest uppercase mb-4 border-b border-border print:border-gray-300 pb-2 print:text-black">
              Technical Skills
            </h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm pl-4 leading-relaxed">
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">
                Areas:
              </div>
              <div>
                Power Systems, Medium &amp; High Voltage, Electrical Protection,
                Surge &amp; Lightning Protection, Industrial Power Distribution
              </div>
              <div className="font-mono text-muted-foreground print:text-gray-600 uppercase font-semibold">
                Practical:
              </div>
              <div>
                Electrical Installations, Structured Cabling, Schematic
                Interpretation, Equipment Testing &amp; Commissioning, Panel
                Wiring
              </div>
            </div>
          </section>

          <section className="break-inside-avoid print:pt-6">
            <h3 className="text-base font-bold tracking-widest uppercase mb-4 border-b border-border print:border-gray-300 pb-2 print:text-black">
              Certifications
            </h3>
            <ul className="list-disc list-outside text-sm space-y-2 ml-8 text-muted-foreground print:text-gray-800">
              <li>
                MEng Electrical &amp; Computer Engineering — Aristotle
                University of Thessaloniki (In Progress, 2027)
              </li>
              <li>
                Technician in Electrical Systems, Installations &amp; Networks —
                1st Vocational High School of Neapoli (Grade: 19.5/20)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

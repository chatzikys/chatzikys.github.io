import { Link, useLocation } from 'wouter';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/resume', label: 'RESUME' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-grid-pattern flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono font-semibold text-primary tracking-wider hover:text-primary/80 transition-colors">
            S.CHATZIKYRIAKOU
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
            {links.map((link) => {
              const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
              return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs sm:text-sm tracking-wide relative group py-1 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground transition-colors'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {children}
      </main>
      <footer className="border-t border-border py-6 mt-12 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center text-xs font-mono text-muted-foreground">
          <span className="w-full text-center">Stefanos Chatzikyriakou &copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}

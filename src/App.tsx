import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  BookOpen, 
  ArrowLeft,
  Activity,
  Zap,
  DollarSign,
  Users,
  MessageSquare,
  Globe,
  ShoppingBag,
  AlertTriangle,
  Sun,
  Moon
} from 'lucide-react';
import { MANUSCRIPT, INTRODUCTION, AFTER_MAXXING, Section, Term } from './data/manuscript';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Sidebar = ({ isOpen, onClose, theme, toggleTheme }: { isOpen: boolean; onClose: () => void; theme: string; toggleTheme: () => void }) => {
  const location = useLocation();
  
  const getIcon = (id: string) => {
    switch(id) {
      case 'body': return <Activity size={16} />;
      case 'discipline': return <Zap size={16} />;
      case 'money': return <DollarSign size={16} />;
      case 'status': return <Users size={16} />;
      case 'social': return <MessageSquare size={16} />;
      case 'attention': return <Globe size={16} />;
      case 'lifestyle': return <ShoppingBag size={16} />;
      case 'collapse': return <AlertTriangle size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/80 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        className={cn(
          "fixed top-0 left-0 bottom-0 w-72 bg-[var(--bg)] border-r border-[var(--line)] z-50 overflow-y-auto transition-all lg:translate-x-0 duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-8 h-full flex flex-col">
          <Link to="/" onClick={onClose} className="block mb-12">
            <h1 className="text-xl font-bold tracking-tighter uppercase italic serif text-black dark:text-white">The Maxxing Manual</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Cultural Dictionary v1.0</p>
          </Link>

          <nav className="space-y-8 flex-1">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-semibold">Foundations</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 text-sm transition-colors hover:text-black dark:hover:text-white",
                      location.pathname === '/' ? "text-black dark:text-white" : "text-zinc-500"
                    )}
                  >
                    <BookOpen size={16} />
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/index" 
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 text-sm transition-colors hover:text-black dark:hover:text-white",
                      location.pathname === '/index' ? "text-black dark:text-white" : "text-zinc-500"
                    )}
                  >
                    <Menu size={16} />
                    Index
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-semibold">The Pillars</h3>
              <ul className="space-y-3">
                {MANUSCRIPT.map((section) => (
                  <li key={section.id}>
                    <Link 
                      to={`/section/${section.id}`} 
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 text-sm transition-colors hover:text-black dark:hover:text-white",
                        location.pathname.includes(`/section/${section.id}`) ? "text-black dark:text-white" : "text-zinc-500"
                      )}
                    >
                      {getIcon(section.id)}
                      {section.title.split(' / ')[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-semibold">Conclusion</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/after-maxxing" 
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 text-sm transition-colors hover:text-black dark:hover:text-white",
                      location.pathname === '/after-maxxing' ? "text-black dark:text-white" : "text-zinc-500"
                    )}
                  >
                    <ChevronRight size={16} />
                    After Maxxing
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="pt-8 border-t border-black/10 dark:border-white/10">
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-3 text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors w-full"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto py-12 lg:py-20 px-6"
    >
      <header className="mb-12 lg:mb-20 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter serif italic mb-6">
          The Maxxing Manual
        </h2>
        <p className="text-zinc-400 text-lg font-light leading-relaxed">
          A Cultural Dictionary of Optimization, Status, and Internet Identity.
        </p>
      </header>

      <section className="space-y-12">
        <div className="border-t border-black/10 dark:border-white/10 pt-12">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8 font-bold">Introduction</h3>
          <div className="space-y-6 text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
            {INTRODUCTION.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
          {MANUSCRIPT.map((section) => (
            <Link 
              key={section.id}
              to={`/section/${section.id}`}
              className="group p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all bg-black/5 dark:bg-zinc-900/30 rounded-lg"
            >
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 block">{section.subtitle}</span>
              <h4 className="text-lg font-medium group-hover:translate-x-1 transition-transform">{section.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const SectionPage = () => {
  const { id } = useParams();
  const section = MANUSCRIPT.find(s => s.id === id);

  if (!section) return <div className="p-20 text-center">Section not found.</div>;

  return (
    <motion.div 
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 lg:py-20 px-6"
    >
      <header className="mb-12 lg:mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 block font-bold">{section.subtitle}</span>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter serif italic mb-6">{section.title}</h2>
        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-2xl">{section.description}</p>
      </header>

      <div className="space-y-12">
        {section.terms.map((term) => (
          <motion.div 
            key={term.slug}
            whileHover={{ x: 10 }}
            className="group border-b border-black/10 dark:border-white/10 pb-12"
          >
            <Link to={`/term/${term.slug}`} className="block">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">{term.title}</h3>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 italic mono mt-2">{term.type}</span>
              </div>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-6 max-w-2xl">
                {term.definition}
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
                Explore Term <ChevronRight size={12} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TermPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const term = MANUSCRIPT.flatMap(s => s.terms).find(t => t.slug === slug);
  const section = MANUSCRIPT.find(s => s.id === term?.sectionId);

  if (!term) return <div className="p-20 text-center">Term not found.</div>;

  return (
    <motion.div 
      key={slug}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-3xl mx-auto py-12 lg:py-20 px-6"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors text-xs uppercase tracking-widest mb-8 lg:mb-12"
      >
        <ArrowLeft size={14} /> Back
      </button>

      <header className="mb-12 lg:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{section?.title.split(' / ')[0]}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mono">{term.type}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter serif italic mb-8">{term.title}</h2>
        <div className="p-6 lg:p-8 bg-[var(--line)] border border-[var(--line)] rounded-2xl">
          <p className="text-lg lg:text-2xl text-[var(--ink)] font-light leading-relaxed">
            {term.definition}
          </p>
        </div>
      </header>

      <div className="space-y-16">
        <section>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">Usage</h4>
          <p className="text-xl italic text-[var(--ink)] opacity-80 font-serif border-l-2 border-[var(--line)] pl-6 py-2">
            "{term.usage}"
          </p>
        </section>

        <section>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6 font-bold">Related Concepts</h4>
          <div className="flex flex-wrap gap-3">
            {term.related.map(rel => (
              <Link 
                key={rel}
                to={`/term/${rel.toLowerCase()}`}
                className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
              >
                {rel}
              </Link>
            ))}
          </div>
        </section>

        {term.takeaway && (
          <section className="p-8 border border-[var(--line)] rounded-2xl bg-gradient-to-br from-[var(--bg)] to-[var(--line)]">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4 font-bold">Key Takeaway</h4>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {term.takeaway}
            </p>
          </section>
        )}

        {term.actionStep && (
          <section className="p-8 border border-[var(--line)] rounded-2xl bg-[var(--line)]/50">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4 font-bold">Action Step</h4>
            <p className="text-[var(--ink)] font-medium leading-relaxed">
              {term.actionStep}
            </p>
          </section>
        )}

        {!term.takeaway && !term.actionStep && (
          <section className="p-8 border border-black/10 dark:border-white/10 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4 font-bold">Manual Note</h4>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Optimization in this domain is not just about improvement—it's about shifting the baseline of what is considered "fixed" in your life.
            </p>
          </section>
        )}
      </div>
    </motion.div>
  );
};

const AfterMaxxingPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto py-12 lg:py-20 px-6"
    >
      <header className="mb-12 lg:mb-20 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter serif italic mb-6">
          {AFTER_MAXXING.title}
        </h2>
      </header>

      <div className="space-y-8 text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
        {AFTER_MAXXING.content.map((p, i) => (
          <p key={i} className={cn(i === AFTER_MAXXING.content.length - 1 ? "text-black dark:text-white font-medium mt-12" : "")}>
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const IndexPage = () => {
  const allTerms = MANUSCRIPT.flatMap(s => s.terms).sort((a, b) => a.title.localeCompare(b.title));
  
  // Group by first letter
  const groupedTerms: Record<string, Term[]> = {};
  allTerms.forEach(term => {
    const firstLetter = term.title[0].toUpperCase();
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = [];
    }
    groupedTerms[firstLetter].push(term);
  });

  const letters = Object.keys(groupedTerms).sort();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 lg:py-20 px-6"
    >
      <header className="mb-12 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter serif italic mb-6">Index</h2>
        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-light">Complete alphabetical directory of terms.</p>
      </header>

      <div className="space-y-16">
        {letters.map(letter => (
          <div key={letter} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
            <div className="text-4xl font-bold text-zinc-300 dark:text-zinc-800 serif italic">{letter}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groupedTerms[letter].map(term => (
                <Link 
                  key={term.slug} 
                  to={`/term/${term.slug}`}
                  className="group flex items-center justify-between p-4 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 rounded-xl transition-all bg-black/5 dark:bg-zinc-900/20"
                >
                  <span className="font-medium group-hover:text-black dark:group-hover:text-white transition-colors">{term.title}</span>
                  <ChevronRight size={14} className="text-zinc-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    console.log('Applying theme:', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', theme);
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const allTerms = MANUSCRIPT.flatMap(s => s.terms);
  const filteredTerms = searchQuery 
    ? allTerms.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div 
        className={cn(
          "min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--ink)] selection:text-[var(--bg)] transition-colors duration-300",
          theme === 'dark' ? 'dark' : ''
        )}
      >
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} theme={theme} toggleTheme={toggleTheme} />
        
        {/* Top Nav (Mobile) */}
        <header className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md z-30 px-6 flex items-center justify-between transition-colors duration-300">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <Link to="/" className="text-sm font-bold italic serif tracking-tighter">The Maxxing Manual</Link>
          <button onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
          </button>
        </header>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[var(--bg)]/90 backdrop-blur-xl p-6 lg:p-20"
            >
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl font-bold italic serif">Search Dictionary</h3>
                  <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="relative mb-12">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Type a term (e.g. looksmaxxing)..."
                    className="w-full bg-[var(--line)] border border-[var(--line)] rounded-2xl py-4 pl-12 pr-6 text-xl focus:outline-none focus:border-[var(--muted)] transition-all text-[var(--ink)]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
                  {filteredTerms.length > 0 ? (
                    filteredTerms.map(term => (
                      <Link 
                        key={term.slug}
                        to={`/term/${term.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="block p-6 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 rounded-xl transition-all"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-xl font-bold">{term.title}</h4>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500">{term.sectionId}</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 line-clamp-1">{term.definition}</p>
                      </Link>
                    ))
                  ) : searchQuery ? (
                    <p className="text-center text-zinc-500 py-20">No terms found matching "{searchQuery}"</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {MANUSCRIPT.map(s => (
                        <button 
                          key={s.id}
                          onClick={() => setSearchQuery(s.terms[0].title)}
                          className="p-4 text-left border border-black/5 dark:border-white/5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                          <span className="text-[10px] text-zinc-500 uppercase block mb-1">{s.subtitle}</span>
                          <span className="text-sm font-medium">{s.title.split(' / ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="lg:ml-72 pt-16 lg:pt-0">
          {/* Desktop Search Trigger */}
          <div className="hidden lg:flex fixed top-8 right-8 z-20 gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 bg-[var(--line)] border border-[var(--line)] rounded-full text-zinc-500 hover:text-[var(--ink)] transition-all"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-4 px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-full text-zinc-500 hover:text-[var(--ink)] transition-all text-xs"
            >
              <Search size={14} />
              <span>Search terms...</span>
              <kbd className="bg-[var(--bg)] px-1.5 py-0.5 rounded border border-[var(--line)] text-[10px]">⌘K</kbd>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/section/:id" element={<SectionPage />} />
              <Route path="/term/:slug" element={<TermPage />} />
              <Route path="/after-maxxing" element={<AfterMaxxingPage />} />
              <Route path="/index" element={<IndexPage />} />
            </Routes>
          </AnimatePresence>

          <footer className="max-w-4xl mx-auto py-20 px-6 border-t border-black/5 dark:border-white/5 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-600 mb-4 font-bold">The Maxxing Manual</p>
            <p className="text-zinc-500 text-xs">© 2026 Maxxer. All rights reserved. Read clinically.</p>
          </footer>
        </main>
      </div>
    </Router>
  );
}

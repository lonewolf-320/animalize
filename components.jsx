/* ── Animalize Shared UI Components ── */

/* ━━ HEADER ━━ */
function Header({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = [
    { label: "Home", page: "home" },
    { label: "Find a Pet", page: "pets" },
    { label: "Events", page: "events" },
    { label: "About Us", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const handleNav = (page) => { onNavigate(page); setMenuOpen(false); };

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 border-b border-brand-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => handleNav("home")} className="flex items-center gap-3 shrink-0">
          <img src="uploads/Artboard 1.png" alt="Animalize" className="h-10 w-auto" />
          <span className="text-white font-bold text-xl tracking-tight hidden sm:inline">Animalize</span>
        </button>
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <button key={l.page} onClick={() => handleNav(l.page)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activePage === l.page
                  ? 'text-white bg-brand-hover font-medium'
                  : 'text-gray-400 hover:text-white hover:bg-brand-hover'
              }`}>{l.label}</button>
          ))}
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>
              : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>
            }
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map(l => (
            <button key={l.page} onClick={() => handleNav(l.page)}
              className={`text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${
                activePage === l.page ? 'text-white bg-brand-hover font-medium' : 'text-gray-400 hover:text-white hover:bg-brand-hover'
              }`}>{l.label}</button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ━━ HERO (Find a Pet page) ━━ */
function SearchHero({ onSearch }) {
  const [type, setType] = React.useState("");
  const [location, setLocation] = React.useState("");
  const handleSearch = () => { onSearch({ type, location }); };
  const inputCls = "w-full bg-brand-surface border border-brand-border text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition placeholder:text-gray-500";

  return (
    <section className="relative bg-brand-bg overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">Find Your New Best Friend</h1>
        <p className="text-gray-400 text-lg mb-8 font-light">Browse our carefully selected pets, all vaccinated and ready for their forever homes.</p>
        <div className="bg-brand-surface/80 backdrop-blur border border-brand-border rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <select value={type} onChange={e => setType(e.target.value)} className={inputCls + " appearance-none cursor-pointer"}>
                <option value="">All Animals</option>
                {SPECIES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 6l4 4 4-4"/></svg>
              </div>
            </div>
            <div className="flex-1">
              <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="City, State or Zip" className={inputCls} />
            </div>
            <button onClick={handleSearch}
              className="bg-accent hover:bg-accent-hover active:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors shrink-0 flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ━━ FILTER SIDEBAR ━━ */
function FilterSidebar({ filters, onFilterChange, availableBreeds }) {
  const FilterGroup = ({ title, options, filterKey }) => {
    const selected = filters[filterKey] || [];
    const toggle = (val) => {
      const next = selected.includes(val) ? selected.filter(v => v !== val) : [...selected, val];
      onFilterChange(filterKey, next);
    };
    return (
      <div className="mb-6">
        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">{title}</h3>
        <div className="flex flex-col gap-1.5">
          {options.map(opt => (
            <label key={opt} className="flex items-center gap-2.5 cursor-pointer group px-2 py-1.5 rounded-lg hover:bg-brand-hover transition-colors">
              <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${selected.includes(opt) ? 'bg-accent border-accent' : 'border-brand-muted group-hover:border-gray-500'}`}>
                {selected.includes(opt) && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,5 4.5,7.5 8,3"/></svg>}
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  const hasFilters = Object.values(filters).some(arr => arr.length > 0);

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white font-bold text-lg">Filters</h2>
        {hasFilters && <button onClick={() => onFilterChange("__clear")} className="text-xs text-accent hover:text-accent-light transition-colors">Clear All</button>}
      </div>
      <FilterGroup title="Species" options={SPECIES_OPTIONS} filterKey="species" />
      <FilterGroup title="Breed" options={availableBreeds} filterKey="breed" />
      <FilterGroup title="Age" options={AGE_OPTIONS} filterKey="age" />
      <FilterGroup title="Size" options={SIZE_OPTIONS} filterKey="size" />
    </aside>
  );
}

/* ━━ PET CARD ━━ */
function PetCard({ pet, onNavigate }) {
  return (
    <div className="group bg-brand-surface border border-brand-border rounded-xl overflow-hidden hover:border-brand-muted transition-all hover:shadow-lg hover:shadow-black/20" style={{ borderRadius: 'var(--card-radius)' }}>
      <div className="aspect-[4/3] overflow-hidden bg-brand-bg">
        <img src={petPlaceholder(pet.species, pet.name)} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-white font-bold text-lg">{pet.name}</h3>
          <span className="text-[11px] uppercase tracking-wider text-gray-500 bg-brand-bg px-2 py-0.5 rounded-full mt-1">{pet.species}</span>
        </div>
        <p className="text-gray-400 text-sm mb-3">{pet.breed} · {pet.age} · {pet.size}</p>
        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          {pet.location}
        </div>
        <button className="w-full bg-accent hover:bg-accent-hover active:bg-accent-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">Meet {pet.name}</button>
      </div>
    </div>
  );
}

/* ━━ FOOTER ━━ */
function Footer({ onNavigate }) {
  return (
    <footer className="bg-brand-bg border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="uploads/Artboard 1.png" alt="Animalize" className="h-8 w-auto opacity-70" />
            <span className="text-gray-500 text-sm">© 2026 Animalize. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate("about")} className="text-gray-500 hover:text-white text-sm transition-colors">About</button>
            <button onClick={() => onNavigate("contact")} className="text-gray-500 hover:text-white text-sm transition-colors">Contact</button>
            <a href="https://instagram.com/animalize.site" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, SearchHero, FilterSidebar, PetCard, Footer });

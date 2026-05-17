/* ── Animalize Main App with Routing ── */

function App() {
  const [page, setPage] = React.useState("home");
  const [filters, setFilters] = React.useState({ species: [], breed: [], age: [], size: [] });
  const [searchQuery, setSearchQuery] = React.useState({ type: "", location: "" });
  const [mobileFilters, setMobileFilters] = React.useState(false);

  /* ── Tweaks ── */
  const [tweaks, setTweaks] = typeof useTweaks === "function"
    ? useTweaks(/*EDITMODE-BEGIN*/{"accentColor":"#7c1e1e","gridCols":"3","cardRadius":"12"}/*EDITMODE-END*/)
    : [{ accentColor: "#7c1e1e", gridCols: "3", cardRadius: "12" }, () => {}];

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", tweaks.accentColor);
    document.documentElement.style.setProperty("--card-radius", tweaks.cardRadius + "px");
  }, [tweaks.accentColor, tweaks.cardRadius]);

  /* ── Navigate ── */
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "instant" }); };

  /* ── Filter handlers ── */
  const handleFilterChange = (key, value) => {
    if (key === "__clear") { setFilters({ species: [], breed: [], age: [], size: [] }); return; }
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = ({ type, location }) => {
    setSearchQuery({ type, location });
    if (type) setFilters(prev => ({ ...prev, species: type ? [type] : [] }));
  };

  const availableBreeds = React.useMemo(() => {
    const sel = filters.species;
    if (sel.length === 0) return Object.values(BREEDS_BY_SPECIES).flat().sort();
    return sel.flatMap(s => BREEDS_BY_SPECIES[s] || []).sort();
  }, [filters.species]);

  React.useEffect(() => {
    const valid = filters.breed.filter(b => availableBreeds.includes(b));
    if (valid.length !== filters.breed.length) setFilters(prev => ({ ...prev, breed: valid }));
  }, [availableBreeds]);

  const filteredPets = React.useMemo(() => {
    return PETS.filter(pet => {
      if (filters.species.length && !filters.species.includes(pet.species)) return false;
      if (filters.breed.length && !filters.breed.includes(pet.breed)) return false;
      if (filters.age.length && !filters.age.includes(pet.age)) return false;
      if (filters.size.length && !filters.size.includes(pet.size)) return false;
      if (searchQuery.location) {
        if (!pet.location.toLowerCase().includes(searchQuery.location.toLowerCase())) return false;
      }
      return true;
    });
  }, [filters, searchQuery]);

  const activeCount = Object.values(filters).reduce((sum, arr) => sum + arr.length, 0);
  const gridClass = tweaks.gridCols === "2" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  /* ── Pets Page Content ── */
  const PetsPage = () => (
    <div>
      <SearchHero onSearch={handleSearch} />
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white font-bold text-2xl">Available Pets</h2>
            <p className="text-gray-500 text-sm mt-1">{filteredPets.length} pet{filteredPets.length !== 1 ? 's' : ''} found</p>
          </div>
          <button onClick={() => setMobileFilters(!mobileFilters)}
            className="lg:hidden flex items-center gap-2 bg-brand-surface border border-brand-border text-gray-300 text-sm px-4 py-2 rounded-lg hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="18" x2="12" y2="18"/>
            </svg>
            Filters{activeCount > 0 ? ` (${activeCount})` : ''}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} availableBreeds={availableBreeds} />
          </div>
          {mobileFilters && (
            <div className="lg:hidden bg-brand-surface border border-brand-border rounded-xl p-5">
              <FilterSidebar filters={filters} onFilterChange={handleFilterChange} availableBreeds={availableBreeds} />
              <button onClick={() => setMobileFilters(false)}
                className="w-full mt-2 bg-accent text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-accent-hover transition-colors">Apply Filters</button>
            </div>
          )}
          <div className="flex-1">
            {filteredPets.length > 0 ? (
              <div className={`grid ${gridClass} gap-5`}>
                {filteredPets.map(pet => <PetCard key={pet.id} pet={pet} />)}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-gray-600 text-5xl mb-4">🔍</div>
                <h3 className="text-white text-xl font-semibold mb-2">No pets found</h3>
                <p className="text-gray-500 text-sm mb-4">Try adjusting your filters or search criteria.</p>
                <button onClick={() => { handleFilterChange("__clear"); setSearchQuery({ type: "", location: "" }); }}
                  className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header activePage={page} onNavigate={navigate} />

      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "pets" && <PetsPage />}
      {page === "events" && <EventsPage />}
      {page === "about" && <AboutPage onNavigate={navigate} />}
      {page === "contact" && <ContactPage />}

      <Footer onNavigate={navigate} />

      {/* Tweaks Panel */}
      <TweaksPanel title="Animalize Tweaks">
        <TweakSection label="Accent Color">
          <TweakColor value={tweaks.accentColor} onChange={v => setTweaks("accentColor", v)}
            options={["#7c1e1e", "#8b2525", "#5e1616", "#a03030"]} />
        </TweakSection>
        <TweakSection label="Grid Columns (Pets)">
          <TweakRadio value={tweaks.gridCols} onChange={v => setTweaks("gridCols", v)}
            options={[{ label: "2 Cols", value: "2" }, { label: "3 Cols", value: "3" }]} />
        </TweakSection>
        <TweakSection label="Card Radius">
          <TweakSlider value={Number(tweaks.cardRadius)} onChange={v => setTweaks("cardRadius", String(v))}
            min={0} max={24} step={2} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

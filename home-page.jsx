/* ── Animalize Home Page ── */

function HomePage({ onNavigate }) {
  const featuredPets = PETS.slice(0, 4);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-brand-bg overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32 text-center">
          <div className="mb-6">
            <img src="uploads/Artboard 1.png" alt="Animalize" className="h-20 sm:h-28 w-auto mx-auto opacity-90" style={{ borderWidth: "0px", borderRadius: "0px", height: "151px", width: "289px", opacity: "0.09" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Animalize Your Living
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience unforgettable moments with exotic animal shows, find your perfect companion, and capture magical memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate("pets")}
            className="bg-accent hover:bg-accent-hover active:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base">
              Find a Pet
            </button>
            <button onClick={() => onNavigate("events")}
            className="border border-brand-border hover:border-gray-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base hover:bg-brand-hover">
              Explore Events
            </button>
          </div>

          <div className="mt-14 flex items-center justify-center gap-8 sm:gap-12 text-gray-500 text-sm">
            <span><strong className="text-white text-xl block">2,400+</strong>Pets Available</span>
            <span className="w-px h-10 bg-brand-border"></span>
            <span><strong className="text-white text-xl block">150+</strong>Events Hosted</span>
            <span className="w-px h-10 bg-brand-border"></span>
            <span><strong className="text-white text-xl block">10k+</strong>Happy Families</span>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-3">What We Offer</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">From exotic animal shows to pet adoption and professional photography — we bring animals into your life.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
          {
            title: "Exotic Animal Shows",
            desc: "Unforgettable shows featuring snakes, lion cubs, reptiles, exotic parrots, birds of prey and many other exotic and rare animals. Perfect for parties, corporate events, and special occasions.",
            action: "events",
            cta: "View Events"
          },
          {
            title: "Pet Adoption",
            desc: "Find your perfect companion from our carefully selected pets. All our animals are vaccinated, health-checked, and ready for their forever homes.",
            action: "pets",
            cta: "Browse Pets"
          },
          {
            title: "Photography Sessions",
            desc: "Capture magical moments with our exotic animals. Professional photography sessions available for special events and personal photoshoots.",
            action: "events",
            cta: "Book Now"
          }].
          map((s, i) =>
          <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-muted transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                {i === 0 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>}
                {i === 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>}
                {i === 2 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <button onClick={() => onNavigate(s.action)}
            className="text-sm font-semibold transition-colors flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
                {s.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Featured Pets ── */}
      <section className="bg-brand-surface/40 border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Featured Pets</h2>
              <p className="text-gray-500">Ready for their forever homes</p>
            </div>
            <button onClick={() => onNavigate("pets")} className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: 'var(--accent)' }}>
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
          </div>
          <div className="sm:hidden text-center mt-8">
            <button onClick={() => onNavigate("pets")} className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>View All Pets →</button>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">About Animalize</h2>
          <p className="text-gray-400 leading-relaxed mb-3">
            We're a team of dedicated animal lovers who understand the special bond between pets and their owners. Founded in 2010, Animalize has grown from a small local shop to a trusted destination for pet owners nationwide.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our mission is to support and enhance the lives of pets and their families through expert advice, superior products, and exceptional customer service.
          </p>
          <button onClick={() => onNavigate("about")} className="text-sm font-semibold transition-colors" style={{ color: 'var(--accent)' }}>
            Learn More About Us →
          </button>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-brand-border bg-brand-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">Ready to Animalize Your Life?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Whether you're looking for a new companion, planning an event, or need a memorable photoshoot — we've got you covered.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate("pets")} className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Find a Pet
            </button>
            <button onClick={() => onNavigate("contact")} className="border border-brand-border hover:border-gray-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-brand-hover">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>);

}

window.HomePage = HomePage;
/* ── Animalize Events Page ── */

function EventsPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = activeCategory === "All"
    ? EVENTS
    : EVENTS.filter(e => e.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-bg border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">Events &amp; Experiences</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Experience unforgettable moments with exotic animal shows, photography sessions, and educational encounters.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <div className="flex flex-wrap gap-2">
          {EVENT_CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activeCategory === cat
                  ? 'bg-accent text-white font-medium'
                  : 'bg-brand-surface border border-brand-border text-gray-400 hover:text-white hover:border-brand-muted'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-16">
        <p className="text-gray-500 text-sm mb-6">{filtered.length} event{filtered.length !== 1 ? 's' : ''} found</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(evt => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-2">No events in this category</p>
            <button onClick={() => setActiveCategory("All")} className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>View all events</button>
          </div>
        )}
      </section>

      {/* Booking CTA */}
      <section className="border-t border-brand-border bg-brand-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Planning a Special Occasion?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            We bring exotic animals to your event — parties, corporate gatherings, weddings, school programs, and more. Custom packages available.
          </p>
          <a href="mailto:info@animalize.site" className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Request a Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}

/* ── Event Card ── */
function EventCard({ event }) {
  const catColors = {
    Show: 'bg-red-900/30 text-red-300',
    Experience: 'bg-green-900/30 text-green-300',
    Party: 'bg-purple-900/30 text-purple-300',
    Corporate: 'bg-blue-900/30 text-blue-300',
    Photography: 'bg-yellow-900/30 text-yellow-300',
    Camp: 'bg-teal-900/30 text-teal-300',
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden hover:border-brand-muted transition-all group flex flex-col">
      <div className="aspect-[2/1] overflow-hidden bg-brand-bg">
        <img src={eventPlaceholder(event.category, event.id)} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-medium ${catColors[event.category] || 'bg-gray-800 text-gray-300'}`}>
            {event.category}
          </span>
          {event.spots && <span className="text-[11px] text-gray-500">{event.spots} spots</span>}
        </div>
        <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{event.description}</p>
        <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>{event.date}</span>
            <span className="text-brand-border">·</span>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-brand-border">
          <span className="text-white font-semibold text-sm">{event.price}</span>
          <button className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">Book Now</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EventsPage, EventCard });

/* ── Animalize About Us & Contact Pages ── */

/* ━━ ABOUT US ━━ */
function AboutPage({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-bg border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">About Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Dedicated animal lovers on a mission to enhance the lives of pets and their families.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              At Animalize, we're passionate about providing top-quality products and services for your beloved pets. Our extensive range of pet supplies caters to dogs, cats, birds, fish, and more.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We carefully select each item to ensure the health, happiness, and well-being of your furry, feathered, or scaly friends.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Founded in 2010, Animalize has grown from a small local shop to a trusted destination for pet owners nationwide. We're a team of dedicated animal lovers who understand the special bond between pets and their owners.
            </p>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              To support and enhance the lives of pets and their families through expert advice, superior products, and exceptional customer service.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "15+", label: "Years of Experience" },
                { num: "10k+", label: "Happy Families" },
                { num: "2,400+", label: "Pets Placed" },
                { num: "150+", label: "Events Hosted" }
              ].map((s, i) => (
                <div key={i} className="text-center py-3 bg-brand-bg rounded-lg">
                  <div className="text-white text-xl font-bold">{s.num}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-surface/40 border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
          <h2 className="text-white text-2xl font-bold text-center mb-10">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Expert Care", desc: "Every animal is vaccinated, health-checked, and cared for by experienced professionals before finding their forever home." },
              { title: "Ethical Practices", desc: "We work only with responsible breeders and maintain the highest standards of animal welfare across all our services." },
              { title: "Lifelong Support", desc: "Our relationship doesn't end at adoption. We provide ongoing guidance, supplies, and community for pet families." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent)' }}></div>
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
        <h2 className="text-white text-2xl font-bold mb-3">Have Questions?</h2>
        <p className="text-gray-400 mb-6">We'd love to hear from you. Reach out and let's talk about how we can help.</p>
        <button onClick={() => onNavigate("contact")} className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          Contact Us
        </button>
      </section>
    </div>
  );
}

/* ━━ CONTACT ━━ */
function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const inputCls = "w-full bg-brand-bg border border-brand-border text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition placeholder:text-gray-500";

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-bg border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Have a question or want to book an event? We're here to help.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-white font-bold text-xl mb-6">Get in Touch</h2>
            <div className="flex flex-col gap-5">
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>,
                  label: "Email", value: "info@animalize.site" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: "Phone", value: "+1 (555) 123-4567" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                  label: "Location", value: "Karachi, Pakistan" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center shrink-0 text-gray-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 pt-6 border-t border-brand-border">
              <h3 className="text-white font-semibold text-sm mb-3">Follow Us</h3>
              <a href="https://instagram.com/animalize.site" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                @animalize.site
              </a>
            </div>

            {/* Hours */}
            <div className="mt-8 pt-6 border-t border-brand-border">
              <h3 className="text-white font-semibold text-sm mb-3">Hours</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex justify-between"><span>Mon – Fri</span><span className="text-gray-300">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-gray-300">10:00 AM – 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gray-500">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm mb-4">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-white font-bold text-xl mb-6">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Name</label>
                      <input type="text" required value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Email</label>
                      <input type="email" required value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" className={inputCls} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Subject</label>
                    <input type="text" required value={form.subject} onChange={e => update("subject", e.target.value)} placeholder="How can we help?" className={inputCls} />
                  </div>
                  <div className="mb-6">
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Message</label>
                    <textarea required rows="5" value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us more about your inquiry…" className={inputCls + " resize-none"}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent hover:bg-accent-hover active:bg-accent-dark text-white font-semibold py-3 rounded-lg transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage, ContactPage });

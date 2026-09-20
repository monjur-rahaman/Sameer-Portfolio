const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-11Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m4.5 6 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 10-8 10s-8-5-8-10a8 8 0 1 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const socialProfiles = [
  { name: 'LinkedIn', mark: 'in', className: 'linkedin' },
  { name: 'X', mark: '𝕏', className: 'x' },
  { name: 'Google Scholar', mark: 'G', className: 'scholar' },
  { name: 'ResearchGate', mark: 'RG', className: 'researchgate' },
  { name: 'ORCID', mark: 'iD', className: 'orcid' },
  { name: 'Facebook', mark: 'f', className: 'facebook' },
];

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-theme { --contact-blue:#168a63; --contact-blue-dark:#0d6b4b; --contact-ink:#132d22; --contact-copy:#47675a; --contact-muted:#71847a; --contact-border:#d9ebe1; min-height:100vh; padding:68px 0 76px; color:var(--contact-ink); background:#fff; font-family:Inter,Arial,sans-serif; }
        .contact-theme *, .contact-theme *::before, .contact-theme *::after { box-sizing:border-box; }
        .contact-shell { width:min(100% - 64px, 1180px); margin:0 auto; }
        .contact-hero { position:relative; isolation:isolate; overflow:hidden; min-height:330px; display:flex; align-items:flex-end; padding:38px 0; background:#073c2b; border-bottom:1px solid var(--contact-border); }
        .contact-hero::before { content:''; position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,rgba(3, 62, 43,.78),rgba(13,107,75,.20)); pointer-events:none; }
        .contact-hero-image { position:absolute; inset:0; z-index:-2; width:100%; height:100%; object-fit:cover; }
        .contact-hero-content { position:relative; z-index:1; max-width:760px; }
        .contact-kicker { display:inline-flex; align-items:center; gap:9px; margin-bottom:17px; color:#d8f3e4; font-size:.72rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        .contact-kicker::before { content:''; width:25px; height:2px; background:var(--contact-blue); }
        .contact-hero h1, .contact-card h2, .contact-note h2 { font-family:Lora,Georgia,serif; }
        .contact-hero h1 { margin:0; color:#fff; font-size:clamp(2.5rem,5vw,4.35rem); line-height:1.04; letter-spacing:-.045em; }
        .contact-hero p { max-width:650px; margin:18px 0 0; color:#d8f3e4; font-size:clamp(1rem,1.4vw,1.12rem); line-height:1.75; }
        .contact-content-modern { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr); gap:25px; padding-top:54px; }
        .contact-card { padding:32px; border:1px solid var(--contact-border); border-radius:14px; background:#fff; box-shadow:0 8px 24px rgba(24, 60, 45,.05); }
        .contact-card h2 { margin:0 0 10px; font-size:clamp(1.45rem,2.5vw,1.95rem); letter-spacing:-.025em; }
        .contact-card > p { margin:0 0 27px; color:var(--contact-copy); font-size:.96rem; line-height:1.72; }
        .contact-email-list { display:grid; gap:12px; }
        .contact-email { display:flex; align-items:center; gap:14px; padding:16px; color:var(--contact-ink); background:#f5fbf7; border:1px solid var(--contact-border); border-radius:11px; text-decoration:none; transition:border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
        .contact-email:hover { border-color:rgba(22,138,99,.38); transform:translateY(-2px); box-shadow:0 8px 18px rgba(24, 60, 45,.08); }
        .contact-email:active { transform:translateY(0); box-shadow:none; }
        .contact-email:focus-visible { outline:3px solid var(--contact-blue); outline-offset:3px; }
        .contact-icon { display:grid; flex:0 0 auto; place-items:center; width:38px; height:38px; color:var(--contact-blue-dark); background:rgba(22,138,99,.10); border-radius:9px; }
        .contact-icon svg { width:20px; height:20px; }
        .contact-email small { display:block; margin-bottom:3px; color:var(--contact-muted); font-size:.7rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
        .contact-email strong { display:block; color:var(--contact-blue-dark); font-size:.9rem; font-weight:700; overflow-wrap:anywhere; }
        .contact-socials { margin-top:26px; padding-top:23px; border-top:1px solid var(--contact-border); }
        .contact-socials > p { margin:0 0 13px; color:var(--contact-muted); font-size:.7rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
        .contact-social-list { display:flex; flex-wrap:wrap; gap:10px; }
        .contact-social { display:grid; place-items:center; width:42px; height:42px; padding:0; border:1px solid var(--contact-border); border-radius:10px; background:#fff; color:#fff; cursor:not-allowed; opacity:.94; transition:transform .2s ease, box-shadow .2s ease, opacity .2s ease; }
        .contact-social span { display:grid; place-items:center; width:25px; height:25px; border-radius:50%; font-family:Arial,sans-serif; font-size:13px; font-weight:700; line-height:1; }
        .contact-social.linkedin span { border-radius:3px; background:#0a66c2; }.contact-social.x span { background:#111; font-size:14px; }.contact-social.scholar span { background:#4285f4; }.contact-social.researchgate span { background:#00a98f; font-size:9px; }.contact-social.orcid span { background:#a6ce39; font-size:10px; }.contact-social.facebook span { background:#1877f2; font-size:19px; font-family:Arial,sans-serif; }
        .contact-social:not(:disabled):not([aria-disabled='true']):hover { transform:translateY(-3px); opacity:1; box-shadow:0 8px 18px rgba(24, 60, 45,.12); }
        .contact-social:focus-visible { outline:3px solid var(--contact-blue); outline-offset:3px; }
        .contact-info-card { padding:6px 0; }
        .contact-info-card > p { margin:0 0 18px; color:var(--contact-blue); font-size:.72rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        .contact-info-list { display:grid; gap:15px; }
        .contact-info { display:grid; grid-template-columns:40px minmax(0,1fr); gap:13px; align-items:start; padding:19px; background:#f5fbf7; border:1px solid var(--contact-border); border-radius:12px; }
        .contact-info .contact-icon { width:36px; height:36px; }
        .contact-info h3 { margin:1px 0 5px; font-size:.86rem; font-weight:800; }
        .contact-info p { margin:0; color:var(--contact-copy); font-size:.88rem; line-height:1.55; }
        .contact-map { overflow:hidden; margin-top:15px; border:1px solid var(--contact-border); border-radius:12px; background:#f5fbf7; box-shadow:0 8px 24px rgba(24, 60, 45,.05); }
        .contact-map iframe { display:block; width:100%; height:245px; border:0; }
        .contact-map a { display:block; padding:10px 14px; color:var(--contact-blue-dark); font-size:.78rem; font-weight:700; text-decoration:none; }
        .contact-map a:hover { text-decoration:underline; }
        .contact-note { grid-column:1 / -1; display:flex; justify-content:space-between; align-items:center; gap:25px; padding:30px 34px; color:#fff; background:linear-gradient(115deg,#0d6b4b,#168a63); border-radius:14px; }
        .contact-note h2 { margin:0; font-size:clamp(1.35rem,2.2vw,1.75rem); }
        .contact-note p { margin:7px 0 0; color:rgba(255,255,255,.87); font-size:.93rem; line-height:1.6; }
        .contact-note a { display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto; min-height:44px; padding:0 20px; color:var(--contact-blue-dark); background:#fff; border-radius:8px; font-size:.86rem; font-weight:800; text-decoration:none; transition:background .2s ease, box-shadow .2s ease, transform .2s ease; }
        .contact-note a:hover { background:#def3e8; transform:translateY(-2px); box-shadow:0 7px 16px rgba(3, 62, 43,.24); }
        .contact-note a:active { transform:translateY(0); box-shadow:none; }
        .contact-note a:focus-visible, .contact-map a:focus-visible { outline:3px solid var(--contact-blue); outline-offset:3px; }
        @media (max-width:800px) { .contact-content-modern { grid-template-columns:1fr; } .contact-note { grid-column:auto; } }
        @media (max-width:680px) { .contact-theme { padding-top:69px; padding-bottom:45px; } .contact-shell { width:min(100% - 40px,1180px); } .contact-hero { min-height:240px; padding:28px 0; } .contact-content-modern { padding-top:36px; gap:20px; } .contact-card { padding:24px 20px; } .contact-note { display:block; padding:27px 24px; } .contact-note a { width:100%; margin-top:20px; } }
      `}</style>

      <main id="main-content" className="contact-theme">
        <section className="contact-hero" aria-labelledby="contact-title">
          <img className="contact-hero-image" src="/contact-workspace.jpg" alt="" fetchPriority="high" />
          <div className="contact-shell contact-hero-content">
            <span className="contact-kicker">Let&apos;s connect</span>
            <h1 id="contact-title">Get in touch</h1>
            <p>For research collaboration, academic opportunities, community initiatives, or a professional conversation, feel free to reach out.</p>
          </div>
        </section>

        <section className="contact-content-modern contact-shell" aria-label="Contact information">
          <article className="contact-card">
            <h2>Start a conversation</h2>
            <p>I welcome messages about research, collaboration, events, and community-focused projects. The best way to reach me is by email.</p>
            <div className="contact-email-list">
              <a className="contact-email" href="mailto:samirzoolcu@gmail.com">
                <span className="contact-icon"><MailIcon /></span>
                <span><small>Primary email</small><strong>samirzoolcu@gmail.com</strong></span>
              </a>
              <a className="contact-email" href="mailto:samirislam535@gmail.com">
                <span className="contact-icon"><MailIcon /></span>
                <span><small>Alternate email</small><strong>samirislam535@gmail.com</strong></span>
              </a>
            </div>
            <section className="contact-socials" aria-labelledby="social-links-title">
              <p id="social-links-title">Social profiles</p>
              <div className="contact-social-list">
                {socialProfiles.map((profile) => <button key={profile.name} className={`contact-social ${profile.className}`} type="button" aria-disabled="true" aria-label={`${profile.name} link will be added soon`} title={`${profile.name} link coming soon`}><span aria-hidden="true">{profile.mark}</span></button>)}
              </div>
            </section>
          </article>

          <aside className="contact-info-card" aria-label="Contact details">
            <p>Contact details</p>
            <div className="contact-info-list">
              <article className="contact-info"><span className="contact-icon"><PinIcon /></span><div><h3>Based in</h3><p>Shaheed Abdur Rab Hall, University of Chittagong, Chattogram, Bangladesh.</p></div></article>
              <article className="contact-info"><span className="contact-icon"><ClockIcon /></span><div><h3>Availability</h3><p>Bangladesh Standard Time (UTC+6). Please email to arrange a convenient time to connect.</p></div></article>
            </div>
            <section className="contact-map" aria-label="Map of Shaheed Abdur Rab Hall">
              <iframe title="Shaheed Abdur Rab Hall, University of Chittagong" src="https://www.google.com/maps?q=Shaheed+Abdur+Rab+Hall,+University+of+Chittagong&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a href="https://www.google.com/maps/search/?api=1&query=Shaheed+Abdur+Rab+Hall,+University+of+Chittagong" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a>
            </section>
          </aside>

          <section className="contact-note" aria-label="Email call to action">
            <div><h2>Have an idea or opportunity?</h2><p>Send a message and I&apos;ll get back to you as soon as possible.</p></div>
            <a href="mailto:samirzoolcu@gmail.com">Email Samir</a>
          </section>
        </section>
      </main>
    </>
  );
}

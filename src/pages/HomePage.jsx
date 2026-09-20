import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home-intro.css";
import HomeWork from "../components/HomeWork";

const activities = [
  [
    "21 July 2026",
    "Head of Event, Reception of Scholars 2026 — Innovation Hub, University of Chittagong, Bangladesh.",
  ],
  [
    "25 January 2026",
    "Youth Policy Discussion, Youth Policy Talk With Tarique Rahman — Radisson Blu Hotel, Chittagong, Bangladesh.",
  ],
  [
    "26 September 2025",
    "Judge, bKash–BigganChinta Science Festival 2025 — Ispahani Public School and College, Chittagong.",
  ],
  [
    "29 April 2025",
    "First poster presentation at the 1st International Scientific Conference on Sustainable Aquaculture and Fisheries & CVASU Fish Festival 2025.",
  ],
];

const awards = [
  [
    "Best Young Researcher Award",
    "December 2025",
    "Chattogram City Corporation, Asperia Health Research & Development Foundation, and Disease Biology and Molecular Epidemiology Research Group (dBme)",
    "I received this award for my contributions as a Research Assistant in the multi-institutional study “Epidemiological, Clinical, and Genomic Trends of Chikungunya Infection Outbreak in Bangladesh, 2025.”",
  ],
  [
    "Award of Excellence in Research",
    null,
    "Chittagong University Research & Higher Studies (CURHS) and Office for International Affairs (OIA), University of Chittagong",
    "I was recognized for my contributions to research activities, academic excellence, and commitment to advancing scientific knowledge.",
  ],
];

const socialProfiles = [
  { name: "LinkedIn", mark: "in", className: "linkedin" },
  { name: "X", mark: "𝕏", className: "x" },
  { name: "Google Scholar", mark: "G", className: "scholar" },
  { name: "ResearchGate", mark: "RG", className: "researchgate" },
  { name: "ORCID", mark: "iD", className: "orcid" },
  { name: "Facebook", mark: "f", className: "facebook" },
];

function Accordion({ title, open, onToggle, children }) {
  return (
    <section className="accordion-section">
      <button
        className={`accordion-button${open ? " accordion-button--open" : ""}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="accordion-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d={open ? "M4 11.5L9 6.5L14 11.5" : "M4 6.5L9 11.5L14 6.5"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`accordion-body${open ? " accordion-body--open" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(null);
  const toggle = (section) => setOpen(open === section ? null : section);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@400;500;600&display=swap');

        :root {
          --primary: #168A63;
          --primary-dark: #0d6b4b;
          --primary-light: #42a97e;
          --primary-muted: rgba(22, 138, 99, 0.10);
          --primary-soft: rgba(22, 138, 99, 0.06);
          --primary-glow: rgba(22, 138, 99, 0.22);
          --primary-border: rgba(22, 138, 99, 0.18);
          --text: #132d22;
          --text-secondary: #47675a;
          --text-muted: #71847a;
          --surface: #ffffff;
          --surface-2: #f5fbf7;
          --surface-3: #edf8f1;
          --border: #d9ebe1;
          --ease: cubic-bezier(0.4, 0, 0.2, 1);
          --font-body: 'Inter', -apple-system, sans-serif;
          --font-display: 'Lora', Georgia, serif;
          --radius-sm: 8px;
          --radius: 14px;
          --radius-lg: 20px;
          --shadow-card: 0 2px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04);
          --shadow-hover: 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(22,138,99,0.10);
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ─── PAGE ─── */
        .home-page {
          font-family: var(--font-body);
          color: var(--text);
          background: var(--surface);
          padding-top: 68px; /* navbar height offset */
        }

        /* ─── INTRO HERO ─── */
        .intro-section {
          background: linear-gradient(160deg, var(--surface) 0%, var(--surface-3) 50%, var(--surface-2) 100%);
          border-bottom: 1px solid var(--border);
          padding: 72px 24px 64px;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .intro-section::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,138,99,0.09) 0%, transparent 70%);
          pointer-events: none;
        }

        .intro-section::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,138,99,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .intro-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 480px;
          gap: 0;
          animation: fade-up 0.6s var(--ease) both;
          position: relative;
          z-index: 1;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── PROFILE IMAGE ─── */
        .profile-image {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--surface);
          box-shadow: 0 0 0 3px var(--primary), 0 8px 32px rgba(22,138,99,0.20);
          margin-bottom: 24px;
          transition: box-shadow 0.3s var(--ease), transform 0.3s var(--ease);
        }

        .profile-image:hover {
          transform: scale(1.04);
          box-shadow: 0 0 0 4px var(--primary), 0 16px 48px rgba(22,138,99,0.28);
        }

        .intro-copy h1 {
          font-family: var(--font-display);
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .intro-copy p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 400;
        }

        .intro-copy p:first-of-type {
          font-size: 15px;
          color: var(--primary);
          font-weight: 500;
          margin-top: 2px;
        }

        /* ─── SOCIAL ROW ─── */
        .social-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 22px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1.5px solid var(--primary-border);
          background: var(--surface);
          color: var(--primary);
          font-size: 13px;
          font-weight: 700;
          font-family: var(--font-body);
          text-decoration: none;
          letter-spacing: -0.02em;
          transition:
            background 0.22s var(--ease),
            border-color 0.22s var(--ease),
            color 0.22s var(--ease),
            transform 0.2s var(--ease),
            box-shadow 0.22s var(--ease);
        }

        .social-icon:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(22,138,99,0.28);
        }

        /* ─── CONTENT COLUMNS ─── */
        .content-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
        }

        .text-section {
          padding: 52px 48px;
        }

        .about-section {
          border-right: 1px solid var(--border);
        }

        .text-section h2 {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-section h2::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--primary-border), transparent);
        }

        .about-section p {
          font-size: 14.5px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }

        .about-section p:last-child {
          margin-bottom: 0;
        }

        /* ─── TRAVEL LIST ─── */
        .travel-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .travel-list li {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
          animation: fade-up 0.4s var(--ease) both;
          transition: background 0.2s var(--ease);
          border-radius: 6px;
          padding: 14px 12px;
          margin: 0 -12px;
        }

        .travel-list li:last-child {
          border-bottom: none;
        }

        .travel-list li:hover {
          background: var(--primary-soft);
        }

        .travel-list li strong {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .travel-list li span {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* ─── ACCORDIONS ─── */
        .accordions {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .accordion-section {
          border-bottom: 1px solid var(--border);
        }

        .accordion-section:first-child {
          border-top: none;
        }

        .accordion-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 4px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text);
          text-align: left;
          transition: color 0.22s var(--ease);
        }

        .accordion-button:hover,
        .accordion-button--open {
          color: var(--primary);
        }

        .accordion-icon {
          display: flex;
          align-items: center;
          color: var(--text-muted);
          transition: color 0.22s var(--ease), transform 0.3s var(--ease);
          flex-shrink: 0;
        }

        .accordion-button--open .accordion-icon {
          color: var(--primary);
        }

        .accordion-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s var(--ease);
        }

        .accordion-body--open {
          grid-template-rows: 1fr;
        }

        .accordion-content {
          overflow: hidden;
          padding: 0 4px;
        }

        .accordion-body--open .accordion-content {
          padding-bottom: 28px;
        }

        /* ─── AWARD CARDS ─── */
        .award,
        .event {
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px 24px;
          margin-bottom: 12px;
          transition: box-shadow 0.25s var(--ease), border-color 0.25s var(--ease), transform 0.25s var(--ease);
        }

        .award:last-child,
        .event:last-child {
          margin-bottom: 0;
        }

        .award:hover,
        .event:hover {
          border-color: var(--primary-border);
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .award h3,
        .event h3 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 10px;
        }

        .award p,
        .event p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 6px;
        }

        .award p:last-child,
        .event p:last-child {
          margin-bottom: 0;
          color: var(--text-muted);
        }

        .award p b,
        .event p b {
          color: var(--text);
          font-weight: 600;
        }

        /* News content inside accordion */
        .accordion-content > p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.75;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 24px;
        }

        .accordion-content > p b {
          color: var(--text);
          font-weight: 600;
        }

        /* ─── CTA SECTION ─── */
        .call-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          padding: 72px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .call-section::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }

        .call-section h2 {
          font-family: var(--font-display);
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          position: relative;
        }

        .call-section > p {
          font-size: 16px;
          color: rgba(255,255,255,0.72);
          margin-bottom: 32px;
          position: relative;
        }

        .call-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--primary-dark);
          font-family: var(--font-body);
          font-size: 14.5px;
          font-weight: 600;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 12px;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition:
            transform 0.22s var(--ease),
            box-shadow 0.22s var(--ease),
            background 0.22s var(--ease);
          position: relative;
        }

        .call-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.20);
          background: #f0faf4;
        }

        .call-button:active {
          transform: translateY(-1px);
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .content-columns {
            grid-template-columns: 1fr;
          }

          .about-section {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .text-section {
            padding: 40px 28px;
          }
        }

        @media (max-width: 640px) {
          .intro-section {
            padding: 52px 20px 48px;
          }

          .profile-image {
            width: 108px;
            height: 108px;
          }

          .text-section {
            padding: 32px 20px;
          }

          .accordions {
            padding: 0 20px 20px;
          }

          .award,
          .event {
            padding: 18px 18px;
          }

          .call-section {
            padding: 56px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main id="main-content" className="home-page">
        <section className="samir-home-intro" aria-labelledby="samir-home-title">
          <div className="samir-home-intro__inner">
            <div className="samir-home-intro__copy">
              {/* Biography source: https://docs.google.com/document/d/1xYgpQnUqtgB36jFtbdJLVezfg0hWigLLzOeUehRiT-w/edit */}
              <h1 id="samir-home-title">Bachelor's Student, Department of Zoology</h1>
              <p>
                I am <strong>Md. Samir Islam</strong>, a <strong>B.Sc. Zoology student</strong> at <strong className="samir-home-intro__university">University of Chittagong</strong>,
                Bangladesh, with research interests in <em>aquatic ecology, freshwater biodiversity, marine biology,
                and conservation science</em>. My academic journey focuses on understanding ecological interactions
                and biodiversity patterns within aquatic ecosystems.
              </p>
              <p>
                I have completed research projects on freshwater zooplankton ecology, including habitat analysis,
                diurnal movement patterns, morphometric measurements, and taxonomy. I have also conducted a study
                on fish gut content analysis from three major estuaries of Bangladesh, contributing to the
                understanding of feeding ecology, species interactions, and fisheries management.
              </p>
              <div className="samir-home-intro__contact">
                <span><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>Chattogram, Bangladesh</span>
                <a href="mailto:samirzoolcu@gmail.com">samirzoolcu@gmail.com</a>
              </div>
              <div className="samir-home-intro__actions">
                <Link className="samir-home-intro__primary" to="/projects/research">View Research</Link>
                <Link className="samir-home-intro__secondary" to="/contact">Get in Touch</Link>
              </div>
            </div>
            <div className="samir-home-intro__portrait">
              <img src="/Profile.jpg" alt="Md. Samir Islam at an award presentation" width="1909" height="1365" fetchPriority="high" />
            </div>
          </div>
        </section>

        <HomeWork />

        <div className="home-details-cards">
          <section className="home-detail-card" aria-labelledby="home-skills-title">
            <h2 id="home-skills-title">My Technical Skills</h2>
            <div className="home-detail-card__body">
              <ul className="home-skills-list">
                {['Biological data analysis', 'Statistical analysis', 'GIS-based ecological mapping',
                  'Field research techniques', 'Laboratory methods', 'Scientific communication'].map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="home-detail-card" aria-labelledby="home-activities-title">
            <h2 id="home-activities-title">Events & Activities</h2>
            <div className="home-detail-card__body">
              <ul className="home-activities-list">
                {activities.map(([date, text]) => (
                  <li key={date}>
                    <div className="home-activity-date">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h2" /></svg>
                      <strong>{date}</strong>
                    </div>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ── ACCORDIONS ── */}
        <section className="accordions home-awards">
          <Accordion
            title="Awards"
            open={open === "awards"}
            onToggle={() => toggle("awards")}
          >
            {awards.map(([title, date, organization, detail]) => (
              <article className="award" key={title}>
                <h3>{title}</h3>
                {date && <p><b>Date:</b> {date}</p>}
                <p><b>Organized By:</b> {organization}</p>
                <p>{detail}</p>
              </article>
            ))}
          </Accordion>

        </section>

        {/* ── CTA ── */}
        <section className="home-contact-card" aria-labelledby="home-contact-title">
          <div>
            <h2 id="home-contact-title">Get in Touch</h2>
            <p>Contact me by email.</p>
            <a className="home-contact-email" href="mailto:samirzoolcu@gmail.com">samirzoolcu@gmail.com</a>
            <div className="home-social-list" aria-label="Social profiles">
              {socialProfiles.map((profile) => <button key={profile.name} className={`home-social ${profile.className}`} type="button" aria-disabled="true" aria-label={`${profile.name} link will be added soon`} title={`${profile.name} link coming soon`}><span aria-hidden="true">{profile.mark}</span></button>)}
            </div>
          </div>
          <a href="mailto:samirzoolcu@gmail.com" className="home-contact-button">
            Email Me <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </>
  );
}

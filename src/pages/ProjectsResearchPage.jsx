import { useState } from 'react';
import '../styles/community-pages.css';

const researchProjects = [
  {
    title: 'Zooplankton Diversity, Community Structure, and Seasonal Succession',
    period: 'November 2023 — September 2024',
    text: 'Samir investigated zooplankton diversity, community structure, and seasonal succession in differently managed University of Chittagong campus waterbodies, examining how physicochemical water-quality parameters influence zooplankton communities and aquatic ecosystem condition. His work included sampling, taxonomic identification, abundance estimation, diversity-index calculation, statistical analysis, and research-data preparation.',
    topics: ['Zooplankton', 'Water quality', 'Campus waterbodies'],
  },
  {
    title: 'Diversity and Gut Content Analysis of Fishes from Chattogram Estuaries',
    period: 'July 2024 — December 2024',
    text: 'Funded by the University of Chittagong Research Cell, this project assessed fish diversity and feeding ecology in the Karnaphuli, Muhuri, and Bakkhali estuaries through stomach-content analysis, morphometric measurements, and water-quality assessment. Samir contributed fish sampling, morphometric measurement, dietary analysis, and environmental-factor analysis.',
    topics: ['Fish diversity', 'Feeding ecology', 'Estuaries'],
  },
  {
    title: 'Epidemiological, Clinical and Genomic Trend of Chikungunya Infection Outbreak in Bangladesh, 2025',
    period: '2025',
    text: 'A multi-institutional project organized by Chattogram City Corporation and Asperia Health Research & Development Foundation. The study investigated epidemiological, clinical, and genomic characteristics of the 2025 outbreak through patient data, clinical information, and molecular epidemiological approaches. Samir served as a Research Assistant; his contribution received the Best Young Researcher Award.',
    topics: ['Public health', 'Epidemiology', 'Genomics'],
  },
];

export default function ProjectsResearchPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        .research-theme {
          --research-blue: #168a63; --research-blue-dark: #0d6b4b; --research-ink: #132d22;
          --research-copy: #47675a; --research-muted: #71847a; --research-border: #d9ebe1;
          min-height: 100vh; padding: 68px 0 76px; background: #fff; color: var(--research-ink);
          font-family: Inter, Arial, sans-serif;
        }
        .research-theme *, .research-theme *::before, .research-theme *::after { box-sizing: border-box; }
        .research-shell { width: min(100% - 64px, 1180px); margin: 0 auto; }
        .research-hero { position: relative; overflow: hidden; padding: 72px 0 65px; background: linear-gradient(120deg, #f0faf4, #fbfefc 58%, #e8f7ee); border-bottom: 1px solid var(--research-border); }
        .research-hero::after { content: ''; position: absolute; right: 8%; bottom: -104px; width: 225px; height: 225px; border: 34px solid rgba(22,138,99,.10); border-radius: 50%; }
        .research-hero-content { position: relative; z-index: 1; max-width: 780px; }
        .research-kicker { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 17px; color: var(--research-blue-dark); font-size: .72rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
        .research-kicker::before { content: ''; width: 25px; height: 2px; background: var(--research-blue); }
        .research-hero h1, .research-heading h2, .research-item-title { font-family: Lora, Georgia, serif; }
        .research-hero h1 { margin: 0; font-size: clamp(2.35rem, 5vw, 4.25rem); line-height: 1.06; letter-spacing: -.045em; }
        .research-hero p { max-width: 680px; margin: 18px 0 0; color: var(--research-copy); font-size: clamp(1rem, 1.4vw, 1.12rem); line-height: 1.75; }
        .research-content { padding-top: 54px; }
        .research-intro { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 25px; align-items: end; margin-bottom: 24px; }
        .research-eyebrow { margin: 0 0 8px; color: var(--research-blue); font-size: .72rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
        .research-heading h2 { margin: 0; font-size: clamp(1.55rem, 2.8vw, 2.1rem); line-height: 1.2; letter-spacing: -.025em; }
        .research-intro > p { max-width: 400px; margin: 0; color: var(--research-muted); font-size: .94rem; line-height: 1.65; text-align: right; }
        .research-list { display: grid; gap: 14px; }
        .research-item { overflow: hidden; border: 1px solid var(--research-border); border-radius: 14px; background: #fff; box-shadow: 0 7px 20px rgba(24, 60, 45,.045); transition: border-color .2s ease, box-shadow .2s ease; }
        .research-theme .research-item { border: 1px solid var(--research-border); }
        .research-item[data-open='true'] { border-color: rgba(22,138,99,.34); box-shadow: 0 12px 30px rgba(24, 60, 45,.09); }
        .research-trigger { display: grid; grid-template-columns: 46px minmax(0, 1fr) 34px; gap: 17px; width: 100%; padding: 22px 25px; color: inherit; background: transparent; border: 0; text-align: left; cursor: pointer; transition: background .2s ease, box-shadow .2s ease; }
        .research-theme .research-item .research-trigger { min-height: 0; display: grid; padding: 22px 25px; color: inherit; background: transparent; border: 0; font-size: inherit; font-weight: 400; }
        .research-trigger:hover, .research-theme .research-item .research-trigger:hover { background: #f0faf4; box-shadow: inset 3px 0 0 var(--research-blue); }
        .research-trigger:hover .research-index { background: rgba(22,138,99,.16); transform: scale(1.05); }
        .research-index { display: grid; place-items: center; width: 38px; height: 38px; color: var(--research-blue-dark); background: rgba(22,138,99,.10); border-radius: 9px; font-size: .74rem; font-weight: 800; letter-spacing: .06em; transition: background .2s ease, transform .2s ease; }
        .research-item-title { display: block; margin-top: 1px; font-size: clamp(1.05rem, 2vw, 1.25rem); font-weight: 700; line-height: 1.4; }
        .research-period { display: block; margin-top: 6px; color: var(--research-muted); font-size: .79rem; font-weight: 700; letter-spacing: .04em; }
        .research-chevron { display: grid; place-items: center; align-self: center; width: 30px; height: 30px; color: var(--research-blue-dark); border-radius: 50%; font-size: 1.25rem; line-height: 1; transition: background .2s ease, transform .2s ease; }
        .research-theme .research-item .research-trigger .research-chevron { color: var(--research-blue-dark); font: inherit; font-size: 1.25rem; line-height: 1; }
        .research-item[data-open='true'] .research-chevron { background: rgba(22,138,99,.10); transform: rotate(180deg); }
        .research-trigger:focus-visible { outline: 3px solid var(--research-blue); outline-offset: -3px; }
        .research-details { display: grid; grid-template-columns: 46px minmax(0, 1fr); gap: 17px; padding: 0 25px 25px; }
        .research-details-inner { padding: 2px 0 0; border-top: 1px solid var(--research-border); }
        .research-details p { margin: 18px 0; color: var(--research-copy); font-size: .96rem; line-height: 1.78; }
        .research-theme .research-item .research-details p { margin: 18px 0; max-width: none; color: var(--research-copy); font-size: .96rem; line-height: 1.78; }
        .research-topics { display: flex; flex-wrap: wrap; gap: 8px; }
        .research-topics span { padding: 5px 10px; color: var(--research-blue-dark); background: rgba(22,138,99,.08); border-radius: 999px; font-size: .72rem; font-weight: 700; }
        @media (max-width: 680px) {
          .research-theme { padding-top: 58px; padding-bottom: 45px; }
          .research-shell { width: min(100% - 40px, 1180px); }
          .research-hero { padding: 52px 0 48px; }
          .research-content { padding-top: 36px; }
          .research-intro { display: block; }
          .research-intro > p { margin-top: 13px; text-align: left; }
          .research-trigger { grid-template-columns: 37px minmax(0, 1fr) 28px; gap: 12px; padding: 19px 17px; }
          .research-index { width: 33px; height: 33px; font-size: .68rem; }
          .research-item-title { font-size: 1rem; }
          .research-details { grid-template-columns: 37px minmax(0, 1fr); gap: 12px; padding: 0 17px 20px; }
          .research-details p { font-size: .91rem; }
        }
      `}</style>

      <main id="main-content" className="research-theme">
        <section className="research-hero research-image-banner" aria-labelledby="research-title">
          <img className="community-banner-image" src="/projects-research.jpg" alt="" fetchPriority="high" />
          <div className="research-shell research-hero-content">
            <span className="research-kicker">Research portfolio</span>
            <h1 id="research-title">Current research</h1>
            <p>Research grounded in aquatic systems, biodiversity, environmental health, and data-driven investigation.</p>
          </div>
        </section>

        <section className="research-content research-shell" aria-label="Current research projects">
          <div className="research-intro">
            <div className="research-heading">
              <p className="research-eyebrow">Selected studies</p>
              <h2>Projects in progress and completed work</h2>
            </div>
            <p>Select a project to read about its focus, methods, and contribution.</p>
          </div>

          <div className="research-list">
            {researchProjects.map((project, index) => {
              const isOpen = open === index;
              return (
                <article className="research-item" data-open={isOpen} key={project.title}>
                  <button
                    className="research-trigger"
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`research-details-${index}`}
                  >
                    <span className="research-index">{String(index + 1).padStart(2, '0')}</span>
                    <span>
                      <span className="research-item-title">{project.title}</span>
                      <span className="research-period">{project.period}</span>
                    </span>
                    <span className="research-chevron" aria-hidden="true">⌄</span>
                  </button>
                  {isOpen && (
                    <div className="research-details" id={`research-details-${index}`}>
                      <span aria-hidden="true" />
                      <div className="research-details-inner">
                        <p>{project.text}</p>
                        <div className="research-topics" aria-label="Research topics">
                          {project.topics.map((topic) => <span key={topic}>{topic}</span>)}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

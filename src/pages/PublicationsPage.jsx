import { useRef, useState } from 'react';
import '../styles/publications.css';

const publications = [
  {
    id: 'zooplankton', category: 'papers',
    title: 'Seasonal Succession of Zooplankton of Three Distinct Aquaculture Ponds in Chattogram, Bangladesh',
    authors: 'Reema, S. S., Sad, M. A. A., Islam, M. S., Mashrafi, M., & Hoque, H.',
    venue: 'Journal of the Bangladesh Agricultural University',
    date: '2024', details: 'Volume 22, Issue 4 · Pages 517–529',
    doi: '10.3329/jbau.v22i4.78871',
    description: 'Research on the seasonal succession of zooplankton in three distinct aquaculture ponds in Chattogram, Bangladesh.',
    topics: ['Zooplankton', 'Seasonal succession', 'Aquaculture ponds', 'Bangladesh'],
  },
  {
    id: 'rotifers', category: 'papers',
    title: 'First records of two rotifer species from Bangladesh supported by morphometric and multivariate analyses',
    authors: 'Sad, M. A. A., Mashrafi, M., Islam, M. S., & Hoque, H.',
    venue: 'Journal of Bangladesh Agricultural University',
    date: '2026', details: 'Volume 24, Issue 1 · Pages 49–56',
    doi: '10.3329/jbau.v24i1.88806',
    description: 'First records of two rotifer species from Bangladesh, supported by morphometric measurements and multivariate analyses.',
    topics: ['Rotifers', 'Species records', 'Morphometrics', 'Multivariate analysis'],
  },
  {
    id: 'cladocera', category: 'papers',
    title: 'An annotated checklist of the Cladocera of Bangladesh based on published records',
    authors: 'Al Sad, M. A., Islam, M. S., Bakkar, M. A., & Mashrafi, M.',
    venue: 'Khulna University Studies',
    date: '2026', details: 'Volume 23, Issue 1',
    doi: '10.53808/KUS.2026.23.01.1413-ls',
    description: 'An annotated checklist bringing together published records of Cladocera in Bangladesh.',
    topics: ['Cladocera', 'Annotated checklist', 'Biodiversity', 'Bangladesh'],
  },
  {
    id: 'poster', category: 'posters',
    title: 'Seasonal succession of zooplankton of three distinct aquaculture ponds in Chattogram, Bangladesh',
    authors: 'Reema, S. S., Sad, M. A. A., Islam, M. S., Mashrafi, M., & Hoque, H.',
    venue: '1st International Scientific Conference on Sustainable Aquaculture and Fisheries 2025',
    date: 'April 2025', details: 'CVASU, Chattogram, Bangladesh',
    doi: '10.13140/RG.2.2.32082.67521',
    description: 'A poster presentation on seasonal zooplankton succession in aquaculture ponds, presented at the International Scientific Conference on Sustainable Aquaculture and Fisheries.',
    topics: ['Zooplankton', 'Aquaculture', 'Seasonal succession'],
  },
];

const categories = [
  { id: 'papers', label: 'Published Papers', icon: 'book' },
  { id: 'posters', label: 'Poster Presentations', icon: 'poster' },
];

function Icon({ name }) {
  const paths = {
    book: <><path d="M12 5v15M3 4c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1Z" /></>,
    poster: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h3M8 18h8" /></>,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 4a3 3 0 0 1 0 6M18 13a5 5 0 0 1 3 5v3" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h2" /></>,
    external: <><path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function PublicationsPage() {
  const [category, setCategory] = useState('papers');
  const tabRefs = useRef([]);
  const selected = publications.filter((publication) => publication.category === category);

  function handleTabKey(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    if (event.key === 'ArrowLeft') next = (index + categories.length - 1) % categories.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = categories.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setCategory(categories[next].id);
    tabRefs.current[next].focus();
  }

  return (
    <div className="samir-publications">
      <main id="main-content">
        <section className="sp-banner" aria-labelledby="sp-title">
          <div className="sp-banner-copy"><p>Research & scholarship</p><h1 id="sp-title">Publications</h1></div>
        </section>

        <div className="sp-content">
          <div className="sp-tabs" role="tablist" aria-label="Publication categories">
            {categories.map((tab, index) => (
              <button key={tab.id} ref={(element) => { tabRefs.current[index] = element; }}
                id={`sp-tab-${tab.id}`} type="button" role="tab"
                aria-selected={category === tab.id} aria-controls={`sp-panel-${tab.id}`}
                tabIndex={category === tab.id ? 0 : -1}
                onClick={() => setCategory(tab.id)} onKeyDown={(event) => handleTabKey(event, index)}>
                <Icon name={tab.icon} /><span>{tab.label}</span>
                <span className="sp-count">{publications.filter((publication) => publication.category === tab.id).length}</span>
              </button>
            ))}
          </div>

          {categories.map((tab) => (
            <section key={tab.id} id={`sp-panel-${tab.id}`} role="tabpanel"
              aria-labelledby={`sp-tab-${tab.id}`} hidden={category !== tab.id} tabIndex={0}>
              {category === tab.id && <div className="sp-paper-list">{selected.map((publication) => (
                <article className="sp-paper" key={publication.id} aria-labelledby={`sp-paper-${publication.id}`}>
                  <h2 id={`sp-paper-${publication.id}`}>{publication.title}</h2>
                  <div className="sp-badges"><span>{category === 'papers' ? 'Published' : 'Poster presentation'}</span>{category === 'papers' && <span className="sp-badge-outline">Peer reviewed</span>}</div>
                  <ul className="sp-meta" aria-label="Publication details">
                    <li><Icon name="people" /><span>{publication.authors}</span></li>
                    <li><Icon name="book" /><span>{publication.venue}<small>{publication.details}</small></span></li>
                    <li><Icon name="calendar" /><span>{publication.date}</span></li>
                  </ul>
                  <p className="sp-description">{publication.description}</p>
                  <p className="sp-topics"><strong>Research topics</strong>{publication.topics.join(', ')}</p>
                  <a className="sp-read" href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                    {category === 'papers' ? 'Read the Paper' : 'View the Poster'}<Icon name="external" /><span className="sp-sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              ))}</div>}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

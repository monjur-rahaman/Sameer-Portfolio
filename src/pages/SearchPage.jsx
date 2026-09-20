import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const pages = [
  { title: 'Blogs', path: '/projects/blog', text: 'Blog posts and writing.' },
  { title: 'Home', path: '/home', text: 'Academic portfolio, research interests, grants, awards, events, and travel updates.' },
  { title: 'Publications', path: '/publications', text: 'Poster presentations, conference proceedings, book chapters, peer-reviewed journal publications, dissertation, and PDF links.' },
  { title: 'Projects', path: '/projects', text: 'Research projects focused on aquatic ecology, biodiversity, and conservation.' },
  { title: 'Current Research', path: '/projects/research', text: 'Current research projects and research interests.' },
  { title: 'Achievement Gallery', path: '/gallery', text: 'Achievement gallery, conferences, leadership, awards, and academic photos.' },
  { title: 'Student Organization', path: '/student-organization', text: 'Student organisations, research groups, leadership, and community initiatives.' },
  { title: 'Social Organization', path: '/social-organization', text: 'Proyas, a youth-led social organisation focused on community impact.' },
  { title: 'Contact Me', path: '/contact', text: 'Contact details, working hours, schedule booking, email, and location.' },
];

export default function SearchPage() {
  const [query, setQuery] = useState(''); const navigate = useNavigate();
  const results = useMemo(() => { const term = query.trim().toLowerCase(); return term ? pages.filter((page) => `${page.title} ${page.text}`.toLowerCase().includes(term)) : []; }, [query]);
  return <main className="search-page"><button className="search-back" onClick={() => navigate(-1)} aria-label="Go back">←</button><div className="search-shell"><div className="search-input-wrap"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} autoFocus placeholder="Search this site" aria-label="Search this site" />{query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}</div>{query && <section className="search-results"><p>Results from this site</p>{results.length ? results.map((page) => <Link key={page.path} to={page.path}><strong>{page.title}</strong><span>{page.text}</span></Link>) : <div className="no-results">No matching pages found.</div>}</section>}</div></main>;
}

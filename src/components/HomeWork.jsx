import { useRef, useState } from 'react';
import '../styles/home-work.css';

// Roles and details from the owner's supplied Google document.
const groups = [
  { id: 'research', label: 'Research' },
  { id: 'leadership', label: 'Leadership & Service' },
];
const roles = {
  research: [
    { id: 'plankton', title: 'Research Assistant', organization: 'Plankton Laboratory, University of Chittagong',
      description: 'I am a Research Assistant at the Plankton Laboratory, University of Chittagong.' },
    { id: 'chikungunya', title: 'Research Assistant', organization: 'Chattogram City Corporation & Asperia Health Research & Development Foundation',
      project: 'Epidemiological, Clinical and Genomic Trend of Chikungunya Infection Outbreak in Bangladesh, 2025',
      period: '01 June 2025 – 20 December 2025',
      description: 'I served as a Research Assistant in this multi-institutional study.',
      points: ['The project investigated the epidemiological, clinical, and genomic characteristics of the Chikungunya outbreak in Bangladesh.', 'The study combined patient data, clinical information, and molecular epidemiological approaches.'] },
  ],
  leadership: [
    { id: 'proyas', title: 'Founder', organization: 'Proyas Social Organization',
      description: 'I am the Founder of Proyas, a youth-led social organization founded in 2020 by five friends during the COVID-19 pandemic.',
      points: ['The organization works on humanitarian assistance, social awareness, environmental initiatives, and community development.', 'Its activities include free medical camps, clean water distribution, winter clothing campaigns, and tree plantation programs.'] },
    { id: 'curhs', title: 'Research and Development Secretary', organization: 'Chittagong University Research & Higher Studies (CURHS)' },
    { id: '3sa', title: 'IT Coordinator', organization: '3SA (Snake Safety & Awareness Initiative)' },
  ],
};

function WorkIcon({ calendar = false }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{calendar ? <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h2" /></> : <><path d="M4 21V3h12v18M2 21h20M16 9h4v12M8 7h4M8 11h4M8 15h4M9 21v-3h2v3" /></>}</svg>;
}

export default function HomeWork() {
  const [active, setActive] = useState('research');
  const refs = useRef([]);
  function onKeyDown(event, index) {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - index;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = 1;
    if (next === undefined) return;
    event.preventDefault(); setActive(groups[next].id); refs.current[next].focus();
  }
  return <section className="home-work" aria-label="My experience">
    <div className="home-work-tabs" role="tablist" aria-label="Experience categories">
      {groups.map((group, index) => <button key={group.id} type="button" role="tab" id={`work-tab-${group.id}`} aria-controls={`work-panel-${group.id}`} aria-selected={active === group.id} tabIndex={active === group.id ? 0 : -1} ref={element => { refs.current[index] = element; }} onClick={() => setActive(group.id)} onKeyDown={event => onKeyDown(event, index)}><WorkIcon />{group.label}</button>)}
    </div>
    {groups.map(group => <div key={group.id} role="tabpanel" id={`work-panel-${group.id}`} aria-labelledby={`work-tab-${group.id}`} hidden={active !== group.id} tabIndex={0}>
      {active === group.id && <div className="home-work-list">{roles[group.id].map(role => <article className="home-work-card" key={role.id}>
        <h2>{role.title}</h2>
        <div className="home-work-meta"><p><WorkIcon /><span>{role.organization}</span></p>{role.project && <p><WorkIcon /><span>{role.project}</span></p>}{role.period && <p><WorkIcon calendar /><span>{role.period}<small>Project duration</small></span></p>}</div>
        {role.description && <div className="home-work-details"><p>{role.description}</p>{role.points && <ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul>}</div>}
      </article>)}</div>}
    </div>)}
  </section>;
}

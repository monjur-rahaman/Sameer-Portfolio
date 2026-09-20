import { Link } from 'react-router-dom';
import '../styles/projects.css';

// Source: owner's Google document, “Your Projects”.
const projects = [
  {
    title: 'Zooplankton Diversity, Community Structure, and Seasonal Succession in Relation to Water Quality Parameters in Chittagong University Campus Waterbodies (Differently Managed)',
    period: 'November 2023 – September 2024',
    advisor: 'Humayra Hoque, Assistant Professor, Department of Zoology, University of Chittagong',
    goal: 'To investigate zooplankton diversity, community structure, and seasonal succession in differently managed waterbodies on the University of Chittagong campus, and to evaluate how physicochemical water quality parameters influence zooplankton communities and overall aquatic ecosystem condition.',
    role: 'My work included zooplankton sampling, taxonomic identification, abundance estimation, measurement of physicochemical water quality parameters, ecological diversity index calculation, statistical analysis, and preparation of research data for publication.',
  },
  {
    title: 'Diversity and Gut Content Analysis of Fishes from Karnaphuli, Muhuri, and Bakkhali Estuaries of the Chattogram Region',
    period: 'July 2024 – December 2024',
    organization: 'University of Chittagong Research Cell',
    organizationLabel: 'Funding source',
    advisor: 'Humayra Hoque, Assistant Professor, Department of Zoology, University of Chittagong',
    goal: 'To assess fish diversity and feeding ecology in the Karnaphuli, Muhuri, and Bakkhali estuaries by analyzing stomach contents, morphometric measurements (length and weight), and water quality parameters to understand dietary patterns, habitat suitability, and ecological interactions among fish species.',
    role: 'My work included fish sampling, morphometric measurements, stomach content analysis, assessment of physicochemical water quality parameters, and analysis of environmental factors influencing fish distribution, migration patterns, and niche partitioning.',
  },
  {
    title: 'Epidemiological, Clinical and Genomic Trend of Chikungunya Infection Outbreak in Bangladesh, 2025',
    period: '01 June 2025 – 20 December 2025',
    organization: 'Chattogram City Corporation (CCC) and Asperia Health Research & Development Foundation (ARF)',
    organizationLabel: 'Funding / organizing source',
    advisor: 'Prof. Adnan Mannan, Ph.D., Department of Genetic Engineering and Biotechnology, University of Chittagong',
    goal: 'To investigate the epidemiological, clinical, and genomic characteristics of the Chikungunya outbreak in Bangladesh through integrated analysis of patient data, clinical information, and molecular epidemiological approaches.',
    role: 'I served as a Research Assistant in this multi-institutional study.',
  },
];

function ProjectIcon({ name }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'calendar' ? <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h2" /></> : name === 'person' ? <><circle cx="12" cy="7" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></> : <><path d="M4 21V3h12v18M2 21h20M16 9h4v12M8 7h4M8 11h4M8 15h4" /></>}
  </svg>;
}

export default function ProjectsPage() {
  return <main id="main-content" className="samir-projects">
    <header className="samir-projects-banner" aria-labelledby="projects-title"><div><p>Research & exploration</p><h1 id="projects-title">Projects</h1></div></header>
    <div className="samir-projects-content">
    <p className="samir-projects-intro">My research in aquatic ecology, fisheries biology, and public health.</p>
    <section className="samir-projects-list" aria-label="Research projects">
      {projects.map((project, index) => <article className="samir-project-card" key={project.title} aria-labelledby={`project-title-${index}`}>
        <h2 id={`project-title-${index}`}>{project.title}</h2>
        <div className="samir-project-meta">
          {project.organization && <p><ProjectIcon name="organization" /><span><small>{project.organizationLabel}</small>{project.organization}</span></p>}
          <p><ProjectIcon name="person" /><span><small>{index === 2 ? 'Project advisor / Principal investigator' : 'Project advisor'}</small>{project.advisor}</span></p>
          <p><ProjectIcon name="calendar" /><span><small>Project duration</small>{project.period}</span></p>
        </div>
        <div className="samir-project-details"><h3>Project goal</h3><p>{project.goal}</p><h3>My contribution</h3><p>{project.role}</p></div>
      </article>)}
    </section>
    <section className="samir-project-contact" aria-label="Contact invitation"><div><h2>Get in Touch</h2><p>Contact me by email.</p></div><Link to="/contact">Get in Touch <span aria-hidden="true">↗</span></Link></section>
    </div>
  </main>;
}

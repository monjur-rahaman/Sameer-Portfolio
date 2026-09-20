import '../styles/community-pages.css';

const organizations = [
  { name: 'Proyas Social Organization', role: 'Founder', description: 'I am the Founder of Proyas Social Organization.' },
  { name: 'Plankton Laboratory, University of Chittagong', role: 'Research Assistant', description: 'I work as a Research Assistant at the Plankton Laboratory, University of Chittagong.' },
  { name: 'Chittagong University Research & Higher Studies (CURHS)', role: 'Research and Development Secretary', description: 'I serve as Research and Development Secretary at CURHS.' },
  { name: '3SA (Snake Safety & Awareness Initiative)', role: 'IT Coordinator', description: 'I serve as IT Coordinator of 3SA.' },
];

export default function StudentOrganizationPage() {
  return <main id="main-content" className="community-page">
    <header className="community-banner student-org-banner" aria-labelledby="student-org-title">
      <img className="community-banner-image" src="/Profile.jpg" alt="" fetchPriority="high" />
      <div><p>Leadership & service</p><h1 id="student-org-title">Student Organization</h1></div>
    </header>
    <div className="community-content">
      <section className="community-card-grid" aria-label="My student organizations">
        {organizations.map((organization) => <article className="community-card community-card--with-image" key={organization.name}>
          <img className="community-card-image" src="/Profile.jpg" alt="Md. Samir Islam receiving an award at a presentation ceremony" width="1909" height="1365" />
          <div className="community-card-content"><span className="community-card-role">{organization.role}</span><h2>{organization.name}</h2><div className="community-card-body"><p>{organization.description}</p></div></div>
        </article>)}
      </section>
    </div>
  </main>;
}

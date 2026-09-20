import '../styles/community-pages.css';

const areas = [
  { title: 'Humanitarian support', items: ['Emergency humanitarian support', 'Clean water distribution', 'Winter clothing campaigns', 'Livelihood support for underprivileged individuals'] },
  { title: 'Health & community wellbeing', items: ['Free medical camps', 'Ramadan and Iftar programs', 'Social awareness initiatives'] },
  { title: 'Environment & youth participation', items: ['Tree plantation programs', 'Environmental activities', 'Youth leadership and volunteerism'] },
];

export default function ProyasPage() {
  return <main id="main-content" className="community-page">
    <header className="community-banner community-banner--proyas"><img className="community-banner-image" src="/proyas-community.jpg" alt="" fetchPriority="high" /><div><p>Community & service</p><h1>Proyas</h1></div></header>
    <div className="community-content">
      <article className="community-card community-card--with-image">
        <img className="community-card-image" src="/Profile.jpg" alt="Md. Samir Islam receiving an award at a presentation ceremony" width="1909" height="1365" />
        <div className="community-card-content"><h2>Proyas Social Organization</h2>
        <div className="community-meta"><span>My role: Founder</span><span>Founded in 2020</span></div>
        <div className="community-card-body"><p>I am the Founder of Proyas, a youth-led social organization founded in 2020 by five friends during the COVID-19 pandemic. The organization started as a voluntary initiative to support people during the pandemic and gradually expanded into humanitarian assistance, social awareness, environmental initiatives, and community development.</p></div></div>
      </article>
      <section aria-labelledby="proyas-focus-title" className="community-focus">
        <h2 id="proyas-focus-title" className="community-section-title">Our initiatives</h2>
        {areas.map(area => <article className="community-card community-card--with-image" key={area.title}><img className="community-card-image" src="/Profile.jpg" alt="Md. Samir Islam receiving an award at a presentation ceremony" width="1909" height="1365" /><div className="community-card-content"><h3>{area.title}</h3><div className="community-card-body"><ul>{area.items.map(item => <li key={item}>{item}</li>)}</ul></div></div></article>)}
      </section>
      <article className="community-card community-card--with-image"><img className="community-card-image" src="/Profile.jpg" alt="Md. Samir Islam receiving an award at a presentation ceremony" width="1909" height="1365" /><div className="community-card-content"><h2>Youth participation & community impact</h2><div className="community-card-body"><p>Through active youth participation and collaborative efforts, Proyas aims to build a more aware, supportive, and sustainable society by empowering communities and encouraging young people to contribute to social development.</p></div></div></article>
    </div>
  </main>;
}

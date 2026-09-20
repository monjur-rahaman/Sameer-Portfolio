import '../styles/community-pages.css';

export default function ProjectsBlogPage() {
  return <main id="main-content" className="community-page">
    <header className="community-banner community-banner--blogs"><img className="community-banner-image" src="/blogs-writing.jpg" alt="" fetchPriority="high" /><div><p>Notes & writing</p><h1>Blogs</h1></div></header>
    <div className="community-content">
      <section className="community-card" aria-labelledby="blog-empty-title"><h2 id="blog-empty-title">No blog posts yet</h2><div className="community-card-body"><p>My blog posts will appear here when published.</p></div></section>
    </div>
  </main>;
}

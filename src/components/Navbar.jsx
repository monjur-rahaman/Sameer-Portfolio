import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const projectLinks = [
  { label: "Research", to: "/projects/research" },
  { label: "Blogs", to: "/projects/blog" },
];

const navClass = ({ isActive }) =>
  `site-nav__link${isActive ? " site-nav__link--active" : ""}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileProjects, setMobileProjects] = useState(false);
  const menuButton = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenu(false);
    setOpen(false);
    setMobileProjects(pathname.startsWith('/projects'));
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1101px)');
    const closeMobile = () => { if (desktop.matches) setMenu(false); };
    desktop.addEventListener('change', closeMobile);
    return () => desktop.removeEventListener('change', closeMobile);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --primary: #168A63;
          --primary-dark: #0d6b4b;
          --primary-light: #42a97e;
          --primary-muted: rgba(22, 138, 99, 0.12);
          --primary-glow: rgba(22, 138, 99, 0.25);
          --bg: #ffffff;
          --bg-scrolled: rgba(255, 255, 255, 0.97);
          --text: #1a2332;
          --text-muted: #5a6a7e;
          --border: rgba(22, 138, 99, 0.15);
          --shadow-base: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
          --shadow-scrolled: 0 2px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(22,138,99,0.12);
          --nav-height: 68px;
          --radius: 10px;
          --ease: cubic-bezier(0.4, 0, 0.2, 1);
          --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* ─── HEADER ─── */
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--bg);
          border-bottom: 1px solid transparent;
          transition:
            background 0.35s var(--ease),
            border-color 0.35s var(--ease),
            box-shadow 0.35s var(--ease),
            backdrop-filter 0.35s var(--ease);
          font-family: var(--font);
        }

        .site-header--scrolled {
          background: var(--bg-scrolled);
          border-bottom-color: var(--border);
          box-shadow: var(--shadow-scrolled);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        /* ─── NAV WRAP ─── */
        .site-header .site-nav-wrap {
          width: 100%;
          max-width: none;
          margin: 0 auto;
          padding: 0 32px;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ─── LOGO / TITLE ─── */
        .site-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--primary);
          text-decoration: none;
          white-space: nowrap;
          position: relative;
          padding: 6px 2px;
          transition: color 0.25s var(--ease), opacity 0.25s var(--ease);
        }

        .site-title::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          border-radius: 2px;
          transition: transform 0.3s var(--ease);
        }

        .site-title:hover::after {
          transform: scaleX(1);
        }

        /* ─── SPACER ─── */
        .site-nav__spacer {
          flex: 1;
        }

        /* ─── DESKTOP NAV ─── */
        .site-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          width: 100%;
        }

        .site-nav__link {
          position: relative;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          padding: 7px 14px;
          border-radius: var(--radius);
          transition:
            color 0.22s var(--ease),
            background 0.22s var(--ease);
          white-space: nowrap;
        }

        .site-nav__link::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s var(--ease);
        }

        .site-nav__link:hover {
          color: var(--primary);
          background: var(--primary-muted);
        }

        .site-nav__link:hover::after {
          transform: scaleX(0.6);
        }

        .site-nav__link--active {
          color: var(--primary);
          font-weight: 600;
        }

        .site-nav__link--active::after {
          transform: scaleX(1);
        }

        /* ─── PROJECTS DROPDOWN ─── */
        .site-nav__projects {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
        }

        .site-nav__toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 6px;
          margin-left: -3px;
          align-self: center;
          transition: background 0.2s var(--ease);
        }

        .site-nav__toggle:hover {
          background: var(--primary-muted);
        }

        .site-nav__caret {
          display: block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid var(--text-muted);
          transform: translateY(1px);
          transition: transform 0.25s var(--ease), border-top-color 0.2s var(--ease);
        }

        .site-nav__toggle:hover .site-nav__caret,
        .site-nav__projects:focus-within .site-nav__caret {
          border-top-color: var(--primary);
        }

        .site-nav__projects[data-open="true"] .site-nav__caret {
          transform: translateY(1px) rotate(180deg);
          border-top-color: var(--primary);
        }

        .site-nav__dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          min-width: 160px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(22,138,99,0.08);
          padding: 6px;
          animation: dropdown-in 0.22s var(--ease) both;
          z-index: 100;
          overflow: hidden;
        }

        @keyframes dropdown-in {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .site-nav__dropdown a {
          display: block;
          font-family: var(--font);
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          padding: 9px 14px;
          border-radius: 8px;
          transition: color 0.18s var(--ease), background 0.18s var(--ease);
        }

        .site-nav__dropdown a:hover,
        .site-nav__dropdown a.active {
          color: var(--primary);
          background: var(--primary-muted);
        }

        /* ─── SEARCH BUTTON ─── */
        .site-search-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          margin-left: 6px;
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          border-radius: 10px;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          transition:
            color 0.22s var(--ease),
            background 0.22s var(--ease),
            border-color 0.22s var(--ease),
            box-shadow 0.22s var(--ease),
            transform 0.18s var(--ease);
        }

        .site-search-button:hover {
          color: var(--primary);
          background: var(--primary-muted);
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
          transform: scale(1.06);
        }

        /* ─── MOBILE MENU BUTTON ─── */
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          border: none;
          background: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 10px;
          transition: background 0.2s var(--ease);
          margin-left: auto;
          flex-shrink: 0;
        }

        .mobile-menu-button:hover {
          background: var(--primary-muted);
        }

        .mobile-menu-button span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition:
            transform 0.3s var(--ease),
            opacity 0.3s var(--ease),
            background 0.2s var(--ease);
          transform-origin: center;
        }

        .mobile-menu-button:hover span {
          background: var(--primary);
        }

        /* Hamburger → X animation when menu open */
        .mobile-menu-button[aria-expanded="true"] span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .mobile-menu-button[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .mobile-menu-button[aria-expanded="true"] span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ─── MOBILE NAV ─── */
        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 8px 16px 16px;
          border-top: 1px solid var(--border);
          animation: mobile-nav-in 0.25s var(--ease) both;
          background: var(--bg-scrolled);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          max-height: calc(100vh - var(--nav-height));
          max-height: calc(100dvh - var(--nav-height));
          overflow-y: auto;
          overscroll-behavior: contain;
          padding-bottom: max(16px, env(safe-area-inset-bottom));
        }

        .mobile-nav > a, .mobile-projects { flex-shrink: 0; }
        .mobile-projects-row { display: flex; align-items: center; gap: 8px; }
        .mobile-projects-row > a { flex: 1; }
        .mobile-projects-toggle {
          display: grid;
          place-items: center;
          flex: 0 0 44px;
          height: 44px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--primary-muted);
          color: var(--primary-dark);
          cursor: pointer;
          transition: background .2s ease;
        }
        .mobile-projects-toggle:hover { background: #cfeedd; }
        .mobile-projects-toggle span { transition: transform .2s ease; }
        .mobile-projects-toggle[aria-expanded='true'] span { transform: rotate(180deg); }
        .mobile-projects-submenu { margin: 4px 0 8px 26px; border-left: 2px solid var(--border); padding-left: 8px; }
        .mobile-projects-submenu[hidden] { display: none; }
        .mobile-nav a:focus-visible { outline-offset: -3px; }

        @keyframes mobile-nav-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav a {
          font-family: var(--font);
          font-size: 14.5px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          transition: color 0.2s var(--ease), background 0.2s var(--ease);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-nav a::before {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--primary);
          opacity: 0;
          transition: opacity 0.2s var(--ease), transform 0.2s var(--ease);
          transform: scale(0);
          flex-shrink: 0;
        }

        .mobile-nav a:hover,
        .mobile-nav a.active {
          color: var(--primary);
          background: var(--primary-muted);
        }

        .mobile-nav a:hover::before,
        .mobile-nav a.active::before {
          opacity: 1;
          transform: scale(1);
        }

        /* ─── RESPONSIVE BREAKPOINTS ─── */
        @media (max-width: 1100px) {
          .site-nav__link,
          .site-nav__projects,
          .site-search-button {
            display: none;
          }

          .site-nav {
            display: flex;
            gap: 0;
            min-width: 0;
          }

          .mobile-menu-button {
            display: flex;
          }

          .site-header .site-nav-wrap {
            padding: 0 16px;
          }

          .site-title {
            font-size: 13px;
          }
        }

        @media (min-width: 1101px) {
          .mobile-nav { display: none; }
        }

        @media (max-width: 1200px) and (min-width: 1101px) {
          .site-nav-wrap {
            padding: 0 16px;
          }

          .site-nav__link {
            padding: 7px 10px;
            font-size: 13px;
          }

          .site-title {
            font-size: 13.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && menu) {
            setMenu(false);
            menuButton.current?.focus();
          }
        }}
      >
        <div className="site-nav-wrap">
          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/home" className="site-title">
              MD. SAMIR ISLAM
            </NavLink>
            <div className="site-nav__spacer" />
            <NavLink to="/home" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/publications" className={navClass}>
              Publications
            </NavLink>
            <div
              className="site-nav__projects"
              data-open={open ? "true" : "false"}
            >
              <NavLink to="/projects" className={navClass}>
                Projects
              </NavLink>
              <button
                className="site-nav__toggle"
                onClick={() => setOpen(!open)}
                aria-label="Projects menu"
                aria-expanded={open}
              >
                <span className="site-nav__caret" />
              </button>
              {open && (
                <div className="site-nav__dropdown">
                  {projectLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>
            <NavLink to="/student-organization" className={navClass}>
              Student Organization
            </NavLink>
            <NavLink to="/social-organization" className={navClass}>
              Social Organization
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
            <button
              className="site-search-button"
              onClick={() => navigate("/search")}
              aria-label="Search site"
            >
              ⌕
            </button>
          </nav>

          <button
            ref={menuButton}
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
            aria-expanded={menu}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menu && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {[
              ["Home", "/home"],
              ["Publications", "/publications"],
              ["Projects", "/projects"],
              ["Gallery", "/gallery"],
              ["Student Organization", "/student-organization"],
              ["Social Organization", "/social-organization"],
              ["Contact", "/contact"],
              ["Search", "/search"],
            ].map(([link, to]) => link === 'Projects' ? (
              <div className="mobile-projects" key={link}>
                <div className="mobile-projects-row">
                  <NavLink to={to} end onClick={() => setMenu(false)}>Projects</NavLink>
                  <button type="button" className="mobile-projects-toggle"
                    aria-label="Projects submenu" aria-expanded={mobileProjects}
                    aria-controls="mobile-projects-submenu" onClick={() => setMobileProjects(!mobileProjects)}>
                    <span aria-hidden="true">⌄</span>
                  </button>
                </div>
                <div id="mobile-projects-submenu" className="mobile-projects-submenu" hidden={!mobileProjects}>
                  {projectLinks.map(project => <NavLink key={project.to} to={project.to} onClick={() => setMenu(false)}>{project.label}</NavLink>)}
                </div>
              </div>
            ) : (
                <NavLink
                  key={link}
                  to={to}
                  onClick={() => setMenu(false)}
                >
                  {link}
                </NavLink>
              ))}
          </nav>
        )}
      </header>
    </>
  );
}

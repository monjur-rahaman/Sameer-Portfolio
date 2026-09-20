import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsResearchPage from './pages/ProjectsResearchPage';
import ProjectsBlogPage from './pages/ProjectsBlogPage';
import ProyasPage from './pages/ProyasPage';
import GalleryPage from './pages/GalleryPage';
import StudentOrganizationPage from './pages/StudentOrganizationPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
import SiteFooter from './components/SiteFooter';
import useTouchFeedback from './hooks/useTouchFeedback';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  useTouchFeedback();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/research" element={<ProjectsResearchPage />} />
        <Route path="/projects/blog" element={<ProjectsBlogPage />} />
        <Route path="/projects/proyas" element={<Navigate to="/social-organization" replace />} />
        <Route path="/social-organization" element={<ProyasPage />} />
        <Route path="/blogs" element={<Navigate to="/projects/blog" replace />} />
        <Route path="/projects/blogs" element={<Navigate to="/projects/blog" replace />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/student-organization" element={<StudentOrganizationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}

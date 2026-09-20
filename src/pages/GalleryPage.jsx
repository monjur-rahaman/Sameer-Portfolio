import { useRef, useState } from 'react';
import '../styles/community-pages.css';
import '../styles/gallery.css';


export default function GalleryPage() {
  const viewer = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function openPhoto(index) {
    setSelectedPhoto(index);
    viewer.current.showModal();
  }

  return <main id="main-content" className="community-page samir-gallery">
    <header className="community-banner gallery-photo-banner" aria-labelledby="gallery-title">
      <img className="community-banner-image" src="/gallery-camera.jpg" alt="" fetchPriority="high" />
      <div><p>Moments & memories</p><h1 id="gallery-title">Gallery</h1></div>
    </header>
    <div className="community-content">
      <section className="gallery-photo-grid" aria-label="Photo gallery">
        {Array.from({ length: 9 }, (_, index) => (
          <figure className="community-card gallery-photo-card" key={index}>
            <button className="gallery-photo-open" type="button" onClick={() => openPhoto(index)} aria-label={`View gallery photo ${index + 1} full size`}>
              <img src="/Profile.jpg" alt="Md. Samir Islam receiving an award at a presentation ceremony" width="1909" height="1365" />
              <span>View photo <span aria-hidden="true">↗</span></span>
            </button>
          </figure>
        ))}
      </section>
    </div>
    <dialog ref={viewer} className="gallery-photo-dialog" aria-label="Gallery photo" onClick={event => { if (event.target === event.currentTarget) viewer.current.close(); }} onClose={() => setSelectedPhoto(null)}>
      <div className="gallery-viewer-content"><button className="gallery-viewer-close" type="button" autoFocus onClick={() => viewer.current.close()} aria-label="Close full-size photo">×</button>
        <img src="/Profile.jpg" alt="Md. Samir Islam receiving an award at a presentation ceremony" width="1909" height="1365" />
        <p>{selectedPhoto === null ? '' : `Gallery photo ${selectedPhoto + 1}`}</p>
      </div>
    </dialog>
  </main>;
}

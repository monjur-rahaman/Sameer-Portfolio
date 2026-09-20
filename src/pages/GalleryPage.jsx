import { useRef, useState } from 'react';
import '../styles/community-pages.css';
import '../styles/gallery.css';

const PHOTOS = [
  { src: '/photo-1.jpg', alt: 'Gallery photo 1' },
  { src: '/photo-2.jpg', alt: 'Gallery photo 2' },
  { src: '/photo-3.jpg', alt: 'Gallery photo 3' },
  { src: '/photo-4.jpg', alt: 'Gallery photo 4' },
  { src: '/photo-5.jpg', alt: 'Gallery photo 5' },
  { src: '/photo-6.jpg', alt: 'Gallery photo 6' },
  { src: '/photo-7.jpg', alt: 'Gallery photo 7' },
  { src: '/photo-8.jpg', alt: 'Gallery photo 8' },
];

export default function GalleryPage() {
  const viewer = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function openPhoto(index) {
    setSelectedPhoto(index);
    viewer.current.showModal();
  }

  return (
    <main id="main-content" className="community-page samir-gallery">
      <header className="community-banner gallery-photo-banner" aria-labelledby="gallery-title">
        <img className="community-banner-image" src="/gallery-camera.jpg" alt="" fetchPriority="high" />
        <div>
          <p>Moments & memories</p>
          <h1 id="gallery-title">Gallery</h1>
        </div>
      </header>

      <div className="community-content">
        <section className="gallery-photo-grid" aria-label="Photo gallery">
          {PHOTOS.map((photo, index) => (
            <figure className="community-card gallery-photo-card" key={index}>
              <button
                className="gallery-photo-open"
                type="button"
                onClick={() => openPhoto(index)}
                aria-label={View gallery photo ${index + 1} full size}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width="1909"
                  height="1365"
                />
                <span>View photo <span aria-hidden="true">↗️</span></span>
              </button>
            </figure>
          ))}
        </section>
      </div>

      <dialog
        ref={viewer}
        className="gallery-photo-dialog"
        aria-label="Gallery photo"
        onClick={event => {
          if (event.target === event.currentTarget) viewer.current.close();
        }}
        onClose={() => setSelectedPhoto(null)}
      >
        <div className="gallery-viewer-content">
          <button
            className="gallery-viewer-close"
            type="button"
            autoFocus
            onClick={() => viewer.current.close()}
            aria-label="Close full-size photo"
          >
            ×
          </button>
          {selectedPhoto !== null && (
            <img
              src={PHOTOS[selectedPhoto].src}
              alt={PHOTOS[selectedPhoto].alt}
              width="1909"
              height="1365"
            />
          )}
          <p>{selectedPhoto === null ? '' : Gallery photo ${selectedPhoto + 1}}</p>
        </div>
      </dialog>
    </main>
  );
}

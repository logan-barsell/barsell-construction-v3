'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const INITIAL_COUNT = 12;

export default function ProjectGallery({ images, projectName }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = event => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex(index => (index + 1) % images.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex(index => (index - 1 + images.length) % images.length);
      }
    };

    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className='project-gallery'>
        {images.slice(0, visibleCount).map((image, index) => (
          <button
            className='project-gallery__item'
            type='button'
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${projectName} project image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={675}
              sizes='(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw'
              loading={index < 4 ? 'eager' : 'lazy'}
              priority={index < 2}
            />
          </button>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className='gallery-more'>
          <button
            type='button'
            className='button button--outline'
            onClick={() =>
              setVisibleCount(count => Math.min(count + 12, images.length))
            }
          >
            <span>View more images</span>
          </button>
          <p>
            Showing {visibleCount} of {images.length}
          </p>
        </div>
      )}

      {activeIndex !== null && (
        <div className='lightbox' role='dialog' aria-modal='true' aria-label={`${projectName} image viewer`}>
          <button
            className='lightbox__close'
            type='button'
            onClick={() => setActiveIndex(null)}
          >
            Close
          </button>
          <div className='lightbox__image'>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={1400}
              height={1050}
              sizes='95vw'
              priority
            />
          </div>
          <div className='lightbox__controls'>
            <button
              type='button'
              onClick={() =>
                setActiveIndex(
                  index => (index - 1 + images.length) % images.length
                )
              }
            >
              Previous
            </button>
            <p>
              {activeIndex + 1} / {images.length}
            </p>
            <button
              type='button'
              onClick={() =>
                setActiveIndex(index => (index + 1) % images.length)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

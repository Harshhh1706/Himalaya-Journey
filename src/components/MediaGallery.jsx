import { useEffect, useState } from "react";
import "../styles/MediaGallery.css";

const mediaFolders = {
  Hampta: import.meta.glob(
    "/public/media/hampta/*.{jpg,jpeg,png,webp,mp4,mov,MP4,MOV,HEIC}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  ),

  Chandratal: import.meta.glob(
    "/public/media/chandratal/*.{jpg,jpeg,png,webp,mp4,mov,MP4,MOV,HEIC}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  ),

  Manali: import.meta.glob(
    "/public/media/manali/*.{jpg,jpeg,png,webp,mp4,mov,MP4,MOV,HEIC}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  ),

  Delhi: import.meta.glob(
    "/public/media/delhi/*.{jpg,jpeg,png,webp,mp4,mov,MP4,MOV,HEIC}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  ),
};

function MediaGallery({ destination, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const files = Object.values(mediaFolders[destination] || {});

  useEffect(() => {
    setCurrentIndex(0);
  }, [destination]);

  useEffect(() => {
    document.body.style.overflow = destination ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [destination]);

  if (!destination || files.length === 0) {
    return null;
  }

  const currentFile = files[currentIndex];

  const isVideo =
    /\.(mp4|mov|webm)$/i.test(currentFile);

  const nextMedia = () => {
    setCurrentIndex((prev) =>
      prev === files.length - 1 ? 0 : prev + 1
    );
  };

  const previousMedia = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? files.length - 1 : prev - 1
    );
  };

  return (
    <div className="media-gallery">

      {/* Close */}

      <button
        className="media-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        ×
      </button>


      {/* Destination heading */}

      <div className="media-heading">
        <span>HIMALAYAN JOURNEY</span>

        <h2>{destination}</h2>

        <p>
          {currentIndex + 1} / {files.length}
        </p>
      </div>


      {/* Main media */}

      <div className="media-viewer">

        <button
          className="media-arrow media-arrow-left"
          onClick={previousMedia}
        >
          ←
        </button>


        <div className="media-content">

          {isVideo ? (
            <video
              key={currentFile}
              src={currentFile}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={currentFile}
              alt={`${destination} ${currentIndex + 1}`}
            />
          )}

        </div>


        <button
          className="media-arrow media-arrow-right"
          onClick={nextMedia}
        >
          →
        </button>

      </div>


      {/* Bottom information */}

      <div className="media-footer">

        <span>
          {isVideo ? "VIDEO" : "PHOTOGRAPH"}
        </span>

        <div className="media-progress">
          {files.map((_, index) => (
            <button
              key={index}
              className={
                index === currentIndex
                  ? "active"
                  : ""
              }
              onClick={() => setCurrentIndex(index)}
              aria-label={`Open media ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default MediaGallery;
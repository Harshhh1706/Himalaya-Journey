import { useEffect, useState } from "react";
import "../styles/MediaGallery.css";

const mediaFolders = {
  Hampta: [
    "/media/hampta/file_0000000004207207a98a9c3518cdf087.png",
    "/media/hampta/file_00000000454872069ab116d47b88ae72.png",
    "/media/hampta/IMG_0356.MOV",
    "/media/hampta/IMG_20260708_131459.jpg",
    "/media/hampta/IMG_20260708_131908.jpg",
    "/media/hampta/IMG_20260708_133655.jpg",
    "/media/hampta/Snapchat-1162999914.jpg",
    "/media/hampta/Snapchat-1549534473.jpg",
    "/media/hampta/Snapchat-1609812612.jpg",
    "/media/hampta/Snapchat-1805684905.jpg",
  ],

  Chandratal: [
    "/media/chandratal/Chandrataal.jpg",
    "/media/chandratal/Chandratal lake - spiti valley.jpg",
    "/media/chandratal/Chandratal Lake view _ surreal mountain lake aesthetic.jpg",
    "/media/chandratal/Chandratal Lake ⛲️.jpg",
    "/media/chandratal/Chandratal Lake.jpg",
    "/media/chandratal/h264_video_20260711_180818.mp4",
    "/media/chandratal/h264_video_20260711_180833.mp4",
    "/media/chandratal/h264_video_20260711_180926.mp4",
    "/media/chandratal/h264_video_20260711_180947.mp4",
    "/media/chandratal/h264_video_20260711_181209.mp4",
    "/media/chandratal/h264_video_20260711_182134.mp4",
    "/media/chandratal/h264_video_20260711_182319.mp4",
    "/media/chandratal/h264_video_20260711_183214.mp4",
    "/media/chandratal/IMG_20260704_134233.jpg",
    "/media/chandratal/IMG_20260705_112450.png",
    "/media/chandratal/IMG_20260705_113250.jpg",
    "/media/chandratal/IMG_20260705_201650.jpg",
    "/media/chandratal/Snapchat-907967074.jpg",
  ],

  Manali: [
    "/media/manali/file_000000009a40720bba73e6d264a50156.png",
    "/media/manali/h264_video_20260711_175857.mp4",
    "/media/manali/h264_video_20260711_180534.mp4",
    "/media/manali/h264_video_20260711_180620.mp4",
    "/media/manali/h264_video_20260711_180747.mp4",
    "/media/manali/Hidimba_Devi_Temple_-_North-east_View_-_Manali_2014-05-11_2648-2649.TIF.jpg",
    "/media/manali/IMG-20260707-WA0008.jpg",
    "/media/manali/IMG-20260707-WA0011.jpg",
    "/media/manali/IMG-20260707-WA0026.jpg",
    "/media/manali/IMG-20260707-WA0050.jpg",
    "/media/manali/IMG_0891.MOV",
    "/media/manali/IMG_20260630_120521.jpg",
    "/media/manali/IMG_20260702_102428.jpg",
    "/media/manali/IMG_20260708_122337.jpg",
    "/media/manali/Snapchat-1197260179.jpg",
    "/media/manali/Snapchat-1582259553.jpg",
    "/media/manali/Snapchat-1811027387.jpg",
    "/media/manali/Snapchat-2112994790.jpg",
    "/media/manali/Snapchat-382049714.jpg",
    "/media/manali/Snapchat-741614918.jpg",
    "/media/manali/Snapchat-766050659.jpg",
    "/media/manali/Snapchat-941983090.mp4",
    "/media/manali/StorySaver.net-meadityajadhav-Video-1783096590991.mp4",
    "/media/manali/StorySaver.net-meadityajadhav-Video-1783096596888.mp4",
  ],

  Delhi: [
    "/media/delhi/h264_video_20260711_180408.mp4",
    "/media/delhi/IMG_20260701_122436.jpg",
    "/media/delhi/IMG_20260702_105040.jpg",
    "/media/delhi/IMG_20260702_105410.jpg",
    "/media/delhi/IMG_20260702_110149.jpg",
    "/media/delhi/IMG_20260702_120953.jpg",
    "/media/delhi/Snapchat-1534466553.jpg",
    "/media/delhi/Snapchat-1729697265.jpg",
    "/media/delhi/Snapchat-1860240497.jpg",
    "/media/delhi/Snapchat-1877464478.jpg",
    "/media/delhi/Snapchat-1931443824.jpg",
    "/media/delhi/Snapchat-2015690452.jpg",
    "/media/delhi/Snapchat-2071327019.jpg",
    "/media/delhi/Snapchat-2092906460.jpg",
    "/media/delhi/Snapchat-304472786.jpg",
    "/media/delhi/Snapchat-499529389.jpg",
    "/media/delhi/Snapchat-600987075.jpg",
    "/media/delhi/Snapchat-939817283.jpg",
    "/media/delhi/Snapchat-972272913.jpg",
    "/media/delhi/Snapchat-980802715.jpg",
  ],
};

function MediaGallery({ destination, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const files = mediaFolders[destination] || [];

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

  const isVideo = /\.(mp4|mov|webm)$/i.test(currentFile);

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

      <button
        className="media-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        ×
      </button>

      <div className="media-heading">
        <span>HIMALAYAN JOURNEY</span>

        <h2>{destination}</h2>

        <p>
          {currentIndex + 1} / {files.length}
        </p>
      </div>

      <div className="media-viewer">

        <button
          className="media-arrow"
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
          className="media-arrow"
          onClick={nextMedia}
        >
          →
        </button>

      </div>

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
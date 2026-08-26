import { useState } from "react";
import MediaGallery from "./MediaGallery";

const delhiPlaces = [
  {
    name: "Red Fort",
    story:
      "A glimpse into Delhi's history, standing quietly in the middle of the city.",
    media: [
      "/media/delhi/IMG_20260701_122436.jpg",
      "/media/delhi/IMG_20260702_105040.jpg",
    ],
  },

  {
    name: "Lotus Temple",
    story:
      "A peaceful break from the noise of the city.",
    media: [
      "/media/delhi/IMG_20260702_105410.jpg",
      "/media/delhi/IMG_20260702_110149.jpg",
    ],
  },

  {
    name: "Raj Ghat",
    story:
      "A quiet and reflective stop during the day.",
    media: [
      "/media/delhi/IMG_20260702_120953.jpg",
      "/media/delhi/Snapchat-1931443824.jpg",
    ],
  },

  {
    name: "Qutub Minar",
    story:
      "One of those places that feels even more impressive when you see it up close.",
    media: [
      "/media/delhi/Snapchat-2071327019.jpg",
      "/media/delhi/Snapchat-2092906460.jpg",
    ],
  },

  {
    name: "Humayun's Tomb",
    story:
      "Architecture, symmetry and a slower moment away from the busy streets.",
    media: [
      "/media/delhi/Snapchat-499529389.jpg",
      "/media/delhi/Snapchat-600987075.jpg",
    ],
  },

  {
    name: "India Gate",
    story:
      "The final stop of a long day of exploring Delhi.",
    media: [
      "/media/delhi/Snapchat-972272913.jpg",
      "/media/delhi/Snapchat-980802715.jpg",
      "/media/delhi/h264_video_20260711_180408.mp4",
    ],
  },
];

function DelhiSection() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const selectedData = delhiPlaces.find(
    (place) => place.name === selectedPlace
  );

  return (
    <section id="delhi" className="delhi-section">

      <div className="delhi-intro">
        <p>ONE DAY · DELHI</p>

        <h2>One city. Six little stories.</h2>

        <p>
          One day in Delhi, moving from one place to another,
          trying to see as much of the city as possible.
        </p>
      </div>


      <div className="delhi-places">

        {delhiPlaces.map((place, index) => (

          <button
            key={place.name}
            type="button"
            className={`delhi-place ${
              selectedPlace === place.name
                ? "delhi-place-active"
                : ""
            }`}
            onClick={() => {
              setSelectedPlace(place.name);
            }}
          >

            <span className="delhi-place-number">
              0{index + 1}
            </span>

            <span className="delhi-place-name">
              {place.name}
            </span>

            <span className="delhi-place-arrow">
              →
            </span>

          </button>

        ))}

      </div>


      {selectedData && (

        <div className="selected-place">

          <p>YOU STOPPED HERE</p>

          <h3>
            {selectedData.name}
          </h3>

          <p>
            {selectedData.story}
          </p>

          <button
            type="button"
            onClick={() => setSelectedPlace(null)}
          >
            CLOSE
          </button>

        </div>

      )}


      {selectedData && (

        <MediaGallery
          destination={selectedData.name}
          files={selectedData.media}
          onClose={() => setSelectedPlace(null)}
        />

      )}

    </section>
  );
}

export default DelhiSection;
import { useState } from "react";

const placeStories = {
  "Red Fort":
    "A glimpse into Delhi's history, standing quietly in the middle of the city.",

  "Lotus Temple":
    "A peaceful break from the noise of the city.",

  "Raj Ghat":
    "A quiet and reflective stop during the day.",

  "Qutub Minar":
    "One of those places that feels even more impressive when you see it up close.",

  "Humayun's Tomb":
    "Architecture, symmetry and a slower moment away from the busy streets.",

  "India Gate":
    "The final stop of a long day of exploring Delhi.",
};

const places = Object.keys(placeStories);

function DelhiSection() {
  const [selectedPlace, setSelectedPlace] = useState(null);

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

        {places.map((place, index) => (
          <div
            key={place}
            className={`delhi-place ${
              selectedPlace === place ? "delhi-place-active" : ""
            }`}
            onClick={() => setSelectedPlace(place)}
          >
            <span className="delhi-place-number">
              0{index + 1}
            </span>

            <span className="delhi-place-name">
              {place}
            </span>

            <span className="delhi-place-arrow">
              →
            </span>
          </div>
        ))}

      </div>

      {selectedPlace && (
        <div
          key={selectedPlace}
          className="selected-place"
        >
          <p>YOU STOPPED HERE</p>

          <h3>{selectedPlace}</h3>

          <p>{placeStories[selectedPlace]}</p>
        </div>
      )}

    </section>
  );
}

export default DelhiSection;
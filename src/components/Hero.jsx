import { useState } from "react";
import heroImage from "../assets/himachal-hero.jpg";
import MediaGallery from "./MediaGallery";

function Hero() {
  const [selectedDestination, setSelectedDestination] =
    useState(null);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="hero-content">

        <p className="hero-label">
          HIMACHAL PRADESH • 2026
        </p>

        <h1>
          TALES OF
          <br />
          <span>HIMALAYA</span>
        </h1>

        <p>
          A journey through mountains, trails
          and unforgettable moments.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("journey")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          EXPLORE JOURNEY
        </button>

      </div>


      {/* =========================
          FLOATING DESTINATION CARDS
      ========================= */}

      <div className="hero-destination-cards">


        {/* =========================
            HAMPTA
        ========================= */}

        <button
          className="hero-destination-card hero-card-hampta"
          onClick={() =>
            setSelectedDestination("Hampta")
          }
        >

          <img
            src="/hero-cards/hampta-card.jpg"
            alt="Hampta Pass"
          />

          <div className="hero-card-overlay"></div>

          <div className="hero-card-content">

            <span>01</span>

            <strong>
              HAMPTA
              <br />
              PASS
            </strong>

            <small>
              VIEW STORY →
            </small>

          </div>

        </button>


        {/* =========================
            CHANDRATAL
        ========================= */}

        <button
          className="hero-destination-card hero-card-chandratal"
          onClick={() =>
            setSelectedDestination("Chandratal")
          }
        >

          <img
            src="/hero-cards/chandratal-card.jpg"
            alt="Chandratal Lake"
          />

          <div className="hero-card-overlay"></div>

          <div className="hero-card-content">

            <span>02</span>

            <strong>
              CHANDRATAL
              <br />
              LAKE
            </strong>

            <small>
              VIEW STORY →
            </small>

          </div>

        </button>


        {/* =========================
            MANALI
        ========================= */}

        <button
          className="hero-destination-card hero-card-manali"
          onClick={() =>
            setSelectedDestination("Manali")
          }
        >

          <img
            src="/hero-cards/manali-card.jpg"
            alt="Manali"
          />

          <div className="hero-card-overlay"></div>

          <div className="hero-card-content">

            <span>03</span>

            <strong>
              MANALI
              <br />
              DIARIES
            </strong>

            <small>
              VIEW STORY →
            </small>

          </div>

        </button>


        {/* =========================
            DELHI
        ========================= */}

        <button
          className="hero-destination-card hero-card-delhi"
          onClick={() =>
            setSelectedDestination("Delhi")
          }
        >

          <img
            src="/hero-cards/delhi-card.jpg"
            alt="Delhi"
          />

          <div className="hero-card-overlay"></div>

          <div className="hero-card-content">

            <span>04</span>

            <strong>
              DELHI
              <br />
              STORIES
            </strong>

            <small>
              VIEW STORY →
            </small>

          </div>

        </button>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}
       <button
       className="hero-scroll"
       onClick={() => {
         document.getElementById("journey")?.scrollIntoView({
          behavior: "smooth",
         });
       }}
       aria-label="Scroll to explore journey"
       >
       <span>SCROLL TO EXPLORE</span>

       <div className="scroll-line"></div>
       </button>
 

      {/* =========================
          MEDIA GALLERY
      ========================= */}

      <MediaGallery
        destination={selectedDestination}
        onClose={() =>
          setSelectedDestination(null)
        }
      />

    </section>
  );
}

export default Hero;
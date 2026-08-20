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

      {/* Hero content */}

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
              .scrollIntoView({
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

        <button
          className="hero-destination-card hero-card-hampta"
          onClick={() =>
            setSelectedDestination("Hampta")
          }
        >
          <span>01</span>

          <strong>HAMPTA PASS</strong>

          <small>VIEW STORY →</small>
        </button>


        <button
          className="hero-destination-card hero-card-chandratal"
          onClick={() =>
            setSelectedDestination("Chandratal")
          }
        >
          <span>02</span>

          <strong>CHANDRATAL</strong>

          <small>VIEW STORY →</small>
        </button>


        <button
          className="hero-destination-card hero-card-manali"
          onClick={() =>
            setSelectedDestination("Manali")
          }
        >
          <span>03</span>

          <strong>MANALI</strong>

          <small>VIEW STORY →</small>
        </button>


        <button
          className="hero-destination-card hero-card-delhi"
          onClick={() =>
            setSelectedDestination("Delhi")
          }
        >
          <span>04</span>

          <strong>DELHI</strong>

          <small>VIEW STORY →</small>
        </button>

      </div>


      {/* Scroll */}

      <div className="hero-scroll">

        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line"></div>

      </div>


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
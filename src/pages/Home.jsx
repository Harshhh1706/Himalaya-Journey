import DestinationCard from "../components/DestinationCard";
import chandratal from "../assets/chandratal.jpeg";
import hampta from "../assets/hampta.png";
import manali from "../assets/manali.png";
import delhi from "../assets/delhi.png";

function Home() {
  return (
    <>
      {/* Journey Route */}
      <section id="journey" className="journey-intro">

        <p className="journey-label">
          THE ROUTE · 2026
        </p>

        <div className="journey-route">

          {/* Mumbai */}
          <div
            className="route-place"
            onClick={() =>
              document.getElementById("destinations")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span className="route-dot"></span>
            <strong>MUMBAI</strong>
            <small>START</small>
          </div>

          <div className="route-line"></div>

          {/* Delhi */}
          <div
            className="route-place"
            onClick={() =>
              document.getElementById("delhi")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span className="route-dot"></span>
            <strong>DELHI</strong>
            <small>TRANSIT</small>
          </div>

          <div className="route-line"></div>

          {/* Manali */}
          <div
            className="route-place"
            onClick={() =>
              document.getElementById("manali")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span className="route-dot"></span>
            <strong>MANALI</strong>
            <small>MOUNTAINS</small>
          </div>

        </div>

        <p className="journey-description">
          From the busy streets of Mumbai to the mountains of Himachal,
          the journey slowly changed its pace.
        </p>

      </section>

      {/* Destination Cards */}
      <section id="destinations" className="destinations">

        <DestinationCard
          title="Hampta Pass"
          description="Four days of trekking through the Himalayas."
          image={hampta}
          tag="THE MAIN TRAIL"
        />

        <DestinationCard
          title="Chandratal Lake"
          description="A day at the beautiful Moon Lake."
          image={chandratal}
          tag="DAY 05"
        />

        <DestinationCard
          title="Manali"
          description="Two days of exploring the mountains and streets."
          image={manali}
          tag="TWO DAYS"
        />

        <DestinationCard
          title="Delhi"
          description="One day of exploring Delhi before heading back home."
          image={delhi}
          tag="ONE DAY"
        />

      </section>

      {/* Travel Quote */}
      <section className="travel-quote">
        <p>
          "Some journeys are remembered not for where they take you,
          but for everything you experience along the way."
        </p>
      </section>
    </>
  );
}

export default Home;
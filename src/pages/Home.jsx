import DestinationCard from "../components/DestinationCard";
import chandratal from "../assets/chandratal.jpeg";
import hampta from "../assets/hampta.png";
import manali from "../assets/manali.png";
import delhi from "../assets/delhi.png";

function Home() {
  return (
    <>
      <section id="journey" className="journey-intro">
        <p>THE JOURNEY BEGINS</p>

        <h2>Mumbai → Delhi → Manali</h2>

        <p>
          From the busy streets of Mumbai to the mountains of Himachal,
          this journey was just the beginning of the story.
        </p>
      </section>

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
function DestinationCard({ title, description, image, tag }) {
  return (
    <div
  className="destination-card"
  onClick={() => {
    if (title === "Hampta Pass") {
      document.getElementById("hampta")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    
    if (title === "Chandratal Lake") {
      document.getElementById("chandratal")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (title === "Manali") {
      document.getElementById("manali")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (title === "Delhi") {
      document.getElementById("delhi")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
>
      <img src={image} alt={title} />

      <span>{tag}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="view-story">
       VIEW STORY →
      </span>
    </div>
  );
}

export default DestinationCard;
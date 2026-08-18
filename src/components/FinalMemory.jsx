import { useEffect, useRef, useState } from "react";

function FinalMemory() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`final-memory ${visible ? "memory-visible" : ""}`}
    >
      <div className="memory-line"></div>

      <p className="final-memory-label">
        THE LAST MEMORY
      </p>

      <h2>
        The journey ended.
        <br />
        <em>The Mountains stayed.</em>
      </h2>

      <p className="final-memory-text">
        A few days, thousands of kilometres,
        and memories that will probably stay much longer.
      </p>
    </section>
  );
}

export default FinalMemory;
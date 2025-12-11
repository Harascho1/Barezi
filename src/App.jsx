import { Activity, useEffect, useRef, useState } from "react";
import LoadingSpinner from "./components/LoadingSpiner";
import "./App.css";
import "./components/Navbar.css";

import Coffe1 from "./assets/coffe1.jpg";
import Coffe2 from "./assets/coffe2.jpg";
import Coffe3 from "./assets/coffe3.jpg";
import Cola1 from "./assets/cocacola1.jpg";
import Cola2 from "./assets/cocacola2.jpg";
import Beer1 from "./assets/beer1.jpg";
import Home from "./assets/home.jpg";

function App() {
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutUsRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowMain(true);
    }, 3000);

    const removalTimer = setTimeout(() => {
      setVisible(false);
    }, 3300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removalTimer);
    };
  }, []);

  return (
    <div>
      <Activity mode={visible ? "visible" : "hidden"}>
        <LoadingSpinner isLoading={loading} />
      </Activity>
      <Activity mode={showMain && !visible ? "visible" : "hidden"}>
        <nav className="navbar">
          <ul>
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(galleryRef)}>Galerija</li>
            <li onClick={() => scrollToSection(aboutUsRef)}>O nama</li>
          </ul>
        </nav>

        <main className={`${showMain ? "show" : ""}`}>
          <section
            ref={homeRef}
            style={{ background: "#f0f0f0" }}
            className="home-section"
          >
            <img src={Home} className="home-photo" />
            <h1 className="brand-name">Bar Barezi</h1>
          </section>

          <section
            ref={galleryRef}
            style={{ background: "#e0e0e0" }}
            className="gallery-section"
          >
            <div className="gallery-container">
              <img src={Coffe1} />
              <img src={Coffe3} />
              <img src={Cola1} />
              <img src={Coffe2} />
              <img src={Cola2} />
              <img src={Beer1} />
            </div>
          </section>

          <section
            ref={aboutUsRef}
            style={{
              background: "black",
              paddingTop: "60px",
              padding: "60px 20px 10px 20px",
            }}
          >
            <h2>O nama</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>
        </main>
      </Activity>
    </div>
  );
}

export default App;

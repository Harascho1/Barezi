import { useRef } from "react";
import "./App.css";
import "./components/Navbar.css";

import Coffe1 from "./assets/coffe1.jpg";
import Coffe2 from "./assets/coffe2.jpg";
import Coffe3 from "./assets/coffe3.jpg";
import Cola1 from "./assets/cocacola1.jpg";
import Cola2 from "./assets/cocacola2.jpg";
import Beer1 from "./assets/beer1.jpg";
import Home from "./assets/home.jpg";
import Gallery from "./assets/gallery.jpg";

function App() {
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(galleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(aboutUsRef)}>About Us</li>
        </ul>
      </nav>

      {/* 4. GLAVNI SADRŽAJ (Main) */}
      <main style={{ boxSizing: "border-box" }}>
        {/* SEKCIJA 1: HOME */}
        {/* Veoma važno: Povezujemo ref sa elementom */}
        <section
          ref={homeRef}
          style={{ background: "#f0f0f0" }}
          className="home-section"
        >
          <img src={Home} className="home-photo" />
          <h1 className="brand-name">Bar Barezi</h1>
        </section>

        {/* SEKCIJA 2: GALLERY */}
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

        {/* SEKCIJA 3: ABOUT US */}
        <section
          ref={aboutUsRef}
          style={{
            background: "#d0d0d0",
            paddingTop: "60px",
            padding: "60px 20px 10px 20px",
          }}
        >
          <h2>O nama</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;

import { Activity, useEffect, useRef, useState } from "react";
import LoadingSpinner from "./components/LoadingSpiner";
import Spin90 from "./components/SpinCup";
import "./App.css";
import "./components/Navbar.css";

import Coffe1 from "./assets/coffe1.jpg";
import Coffe2 from "./assets/coffe2.jpg";
import Coffe3 from "./assets/coffe3.jpg";
import Cola1 from "./assets/cocacola1.jpg";
import Cola2 from "./assets/cocacola2.jpg";
import Beer1 from "./assets/beer1.jpg";
import Home from "./assets/home.jpg";
import Cup from "./assets/cup.png";
import Insta from "./assets/insta.svg";

function App() {
  const homeRef = useRef(null);
  const menuRef = useRef(null);
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
            <li onClick={() => scrollToSection(menuRef)}>
              <a href="https://app.emeni.rs/1435">Cenovnik</a>
            </li>
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
            <div className="brand-name">
              <h1>Bar Barezi</h1>
              <Spin90 img={Cup} />
            </div>
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
              <span className="text">
                Smešten u Kovinu, kafić Barezi predstavlja savršen spoj urbanog
                dizajna i tople, domaće atmosfere. Naša misija je jednostavna:
                pružiti svakom gostu trenutak predaha uz najkvalitetniju ponudu
                pića i vrhunsku uslugu. Od pažljivo biranih zrna kafe do bogate
                karte pića, svaki detalj u Bareziju osmišljen je da zadovolji
                čula. Naš prostor je idealan za sve prilike – od mirnih jutara
                uz novine do energičnih večernjih druženja.
              </span>
            </p>
            <p>Addresa: Cara Lazara 84, Kovin</p>
            <p>
              <a href="https://www.instagram.com/dzb.caffe_lounge_bar_barezi/?hl=en">
                <img src={Insta} width="50px" />
              </a>
            </p>
          </section>
        </main>
      </Activity>
    </div>
  );
}

export default App;

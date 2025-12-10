import "./Navbar.css";

const Navbar = () => {
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutUsRef = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offSetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection(homeRef)}>Home</li>
        <li onClick={() => scrollToSection(galleryRef)}>Gallery</li>
        <li onClick={() => scrollToSection(aboutUsRef)}>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;

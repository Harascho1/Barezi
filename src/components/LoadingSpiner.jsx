import "./LoadingSpiner.css";

import Coffe from "../assets/coffee.png";
import TypingEffect from "./TypeingEffect";
import Background from "../assets/home.jpg";

const LoadingSpinner = ({ isLoading }) => {
  return (
    <div className={`spiner-container ${isLoading ? "" : "fade-out"}`}>
      <img src={Coffe} width="200px" className="spinning-image" />
      <TypingEffect text="Bar Barezi" speed={140} />
    </div>
  );
};

export default LoadingSpinner;

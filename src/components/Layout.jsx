import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="grid-container">
      <Navbar />
      <main style={{ boxSizing: "border-box" }}></main>
    </div>
  );
};

export default Layout;

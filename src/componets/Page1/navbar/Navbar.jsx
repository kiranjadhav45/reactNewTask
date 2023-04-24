import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        Ship<span>mate.</span>
      </div>
      <div className="buttons">
        <div className="logInBtn">
          <button>Login</button>
        </div>
        <div className="learnMoreButton">
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

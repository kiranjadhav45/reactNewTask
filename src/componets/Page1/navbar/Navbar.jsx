import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          width={170}
          height={39}
          src="https://i.ibb.co/ZWVvGqP/Logo.png"
          alt="Logo"
          border="0"
        />
        {/* Ship<span>mate.</span> */}
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

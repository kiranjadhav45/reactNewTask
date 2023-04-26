import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ type }) => {
  const navigate = useNavigate();
  const handleOnLogIn = () => {
    navigate("/2");
  };
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
        {!type && (
          <div className="logInBtn">
            <button onClick={handleOnLogIn}>Login</button>
          </div>
        )}
        <div className="learnMoreButton">
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

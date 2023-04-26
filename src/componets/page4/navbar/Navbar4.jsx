import "./Navbar4.css";

const Navbar4 = () => {
  return (
    <div className="Navbar4">
      <div className="navLogo">
        <img
          width={170}
          height={39}
          src="https://i.ibb.co/ZWVvGqP/Logo.png"
          alt="Logo"
          border="0"
        />
      </div>
      <div className="trackShipmate">
        <img
          width={46.8}
          height={46.8}
          src="https://i.ibb.co/vPYcz6r/dollarsquare.png"
          alt="dollarsquare"
          border="0"
        />
        <button>Track shipment</button>
      </div>
    </div>
  );
};

export default Navbar4;

import "./Action.css";

const Action = () => {
  return (
    <div className="actions">
      <div className="origin">
        <img
          width={24}
          height={24}
          src="https://i.ibb.co/d4WDq9S/location.png"
          alt="location"
          border="0"
        />{" "}
        Origin, Port, City
      </div>
      <div className="destination">
        <img
          width={24}
          height={24}
          src="https://i.ibb.co/d4WDq9S/location.png"
          alt="location"
          border="0"
        />
        Destination, Port, City
      </div>
      <div className="date">
        {" "}
        <span>|</span>
        <img
          width={24}
          height={24}
          src="https://i.ibb.co/nLCpr5h/calendar.png"
          alt="calendar"
          border="0"
        />{" "}
        13 April 2023
      </div>
      <div className="load">
        <span>|</span>
        <img
          width={24}
          height={24}
          src="https://i.ibb.co/d00NqN2/ship.png"
          alt="ship"
          border="0"
        />{" "}
        Load
      </div>
      <div className="actionB">
        <button className="actionbtn">
          <img
            width={16}
            height={12}
            className="actionImage"
            src="https://i.ibb.co/19DP9Cy/Vector.png"
            alt="Vector"
            border="0"
          />
        </button>
      </div>
    </div>
  );
};

export default Action;

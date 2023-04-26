import "./Actions4.css";

const Actions4 = () => {
  return (
    <>
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
        <div className="destination4">
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
          <div> Load</div>
        </div>
        <div className="actionB">
          <span>|</span>
          <img
            width={24}
            height={24}
            src="https://i.ibb.co/6Dy6nwS/edit2.png"
            alt="edit2"
            border="0"
          />
        </div>
      </div>
    </>
  );
};

export default Actions4;

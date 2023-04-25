import "./Action.css";

const Action = () => {
  return (
    <div className="actions">
      <div className="origin">Origin, Port, City</div>
      <div className="destination">Destination, Port, City</div>
      <div className="date">
        {" "}
        <span>|</span> 13 April 2023
      </div>
      <div className="load">
        <span>|</span> Load
      </div>
      <div className="actionB">
        <button className="actionbtn"> ==</button>
      </div>
    </div>
  );
};

export default Action;

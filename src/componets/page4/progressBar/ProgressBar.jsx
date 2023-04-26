import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="progreeBar4">
      <div className="loadProgress">
        <img
          width={24}
          height={24}
          src="https://i.ibb.co/d00NqN2/ship.png"
          alt="ship"
          border="0"
        />
        <span>Load</span>
      </div>
      <div className="progressBar">
        <div className="circleandText">
          <div className="circles">1</div>
          <div className="progressText">Search</div>
        </div>
        <hr className="progressLine" />
        <div className="circleandText">
          <div className="circles">2</div>
          <div className="progressText">Recommended</div>
        </div>
        <hr className="progressLine" />
        <div className="circleandText">
          <div className="circles">3</div>
          <div className="progressText">Results</div>
        </div>
        <hr className="progressLine" />
        <div className="circleandText">
          <div className="circlesBalck"></div>
          <div className="progressTextGreay">Booking</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

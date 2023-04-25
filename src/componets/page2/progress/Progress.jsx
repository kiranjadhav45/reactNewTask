import "./Progress.css";

const Progress = () => {
  return (
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
        <div className="circles">4</div>
        <div className="progressText">Booking</div>
      </div>
    </div>
  );
};

export default Progress;

import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filterTitle">
        <span className="filterTitle1"> 3 Top Quote</span>{" "}
        <span className="filterTitle2">(6 in Total)</span>
      </div>
      <div className="filterItem">
        <div className="filterText">Filters</div>
        <div className="filterImage">
          <img
            width={11.22}
            height={5.03}
            src="https://i.ibb.co/PM3Jpfx/Vector.png"
            alt="Vector"
            border="0"
          />
        </div>
      </div>
      <div className="filterItem">
        <div className="filterText">Price</div>
        <div className="filterImage">
          <img
            width={11.22}
            height={5.03}
            src="https://i.ibb.co/PM3Jpfx/Vector.png"
            alt="Vector"
            border="0"
          />
        </div>
      </div>
      <div className="filterItem">
        <div className="filterText">Modes</div>
        <div className="filterImage">
          <img
            width={11.22}
            height={5.03}
            src="https://i.ibb.co/PM3Jpfx/Vector.png"
            alt="Vector"
            border="0"
          />
        </div>
      </div>
      <div className="filterItem">
        <div className="filterText">Seller</div>
        <div className="filterImage">
          <img
            width={11.22}
            height={5.03}
            src="https://i.ibb.co/PM3Jpfx/Vector.png"
            alt="Vector"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="serviceHeading">Services</div>
      <div className="serviceCards">
        <div className="FreightServices cards">
          <div className="servicestitle">
            <img
              height={32}
              width={32}
              src="https://i.ibb.co/99vg1JS/ship-blue.png"
              alt="ship-blue"
              border="0"
            />{" "}
            Freight Services
          </div>
          <hr className="underLine" />
          <div className="servicesdescription">
            Open new Opportunites to grow your busniess. Enter new markets and
            discover new contitnents, We are with you, door-to-door.
          </div>
        </div>
        <div className="BusinessServices cards">
          <div className="servicestitle">
            <img
              height={28}
              width={28}
              src="https://i.ibb.co/L5X1B81/briefcase-red.png"
              alt="briefcase-red"
              border="0"
            />{" "}
            Business Services
          </div>
          <hr className="underLine" />
          <div className="servicesdescription">
            We support your goals for growth with cargo insurance, online
            payments and paperless workflow. Take your business to the next
            level.
          </div>
        </div>
        <div className="ShippingLogistics cards">
          <div className="servicestitle">
            <img
              width={24}
              height={24}
              src="https://i.ibb.co/fYt80yJ/globalsearch-red.png"
              alt="globalsearch-red"
              border="0"
            />{" "}
            Shipping & Logistics
          </div>
          <hr className="underLine" />
          <div className="servicesdescription">
            Find powerful solutions to meet your diverse transportation needs.
            Agile solutions to handle all your supply chain needs.
          </div>
        </div>
        <div className="Support cards">
          <div className="servicestitle">
            <img
              width={24}
              height={24}
              src="https://i.ibb.co/zhj6qgt/i24support-blue.png"
              alt="i24support-blue"
              border="0"
            />{" "}
            24/7 Support
          </div>
          <hr className="underLine" />
          <div className="servicesdescription">
            Receive support from our experts all over the world at every stage
            of the process, 24/7.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

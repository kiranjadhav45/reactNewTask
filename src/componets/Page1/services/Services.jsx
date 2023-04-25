import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="serviceHeading">Services</div>
      <div className="serviceCards">
        <div className="FreightServices cards">
          <div className="servicestitle">Freight Services</div>
          <hr className="underLine" />
          <div className="servicesdescription">
            Open new Opportunites to grow your busniess. Enter new markets and
            discover new contitnents, We are with you, door-to-door.
          </div>
        </div>
        <div className="BusinessServices cards">
          <div className="servicestitle">Business Services</div>
          <hr className="underLine" />
          <div className="servicesdescription">
            We support your goals for growth with cargo insurance, online
            payments and paperless workflow. Take your business to the next
            level.
          </div>
        </div>
        <div className="ShippingLogistics cards">
          <div className="servicestitle">Shipping & Logistics</div>
          <hr className="underLine" />
          <div className="servicesdescription">
            Find powerful solutions to meet your diverse transportation needs.
            Agile solutions to handle all your supply chain needs.
          </div>
        </div>
        <div className="Support cards">
          <div className="servicestitle">24/7 Support</div>
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

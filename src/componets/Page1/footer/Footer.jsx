import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="message"></span>
      {/* <img
        width={75}
        // height={75}
        className="ellipse"
        src="https://i.ibb.co/6vhgBMp/Ellipse-1.png"
        alt="Ellipse-1"
        border="0"
      /> */}
      <div className="ellipse">
        <img
          width={31.25}
          height={31.25}
          src="https://i.ibb.co/X2LkmcT/message2.png"
          alt="message2"
          border="0"
        />
      </div>
      <img
        className="footerImage"
        src="https://i.ibb.co/0DgXHQ0/Start.png"
        alt="Start"
        border="0"
      />
    </div>
  );
};

export default Footer;

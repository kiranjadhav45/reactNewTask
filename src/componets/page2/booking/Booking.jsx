import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const handleOnCheckout = () => {
    navigate("/4");
  };
  return (
    <div className="priceAndBooking">
      <div className="bookingSummary">
        <div className="bookingSumm">
          <div className="bookingTitle">Booking summary</div>
          <div className="express">
            <div>Express</div>
            <img
              width={28.52}
              height={23}
              src="https://i.ibb.co/V3fxj2b/Plane-icon.png"
              alt="Plane-icon"
              border="0"
            />
          </div>
          <div className="DelhiShanghai">
            <div className="delhi">
              {" "}
              <img
                width={35}
                height={24.5}
                src="https://i.ibb.co/rt2SGNH/icon.png"
                alt="icon"
                border="0"
              />
            </div>

            <hr className="DelhiShanghaiLine" />
            <div className="shanghai">
              <img
                className="shanghai"
                width={35}
                height={24.5}
                src="https://i.ibb.co/rt2SGNH/icon.png"
                alt="icon"
                border="0"
              />
            </div>
          </div>
          <div className="destination">
            <div className="delhi">
              <span>Delhi,</span>
              <span>110003 India</span>
            </div>
            <div className="shanghai">
              <span>Delhi,</span>
              <span>110003 India</span>
            </div>
          </div>
        </div>
        <div className="weightAndLoad">
          <div className="weightBooking">
            <div className="titleweight">Total Weight/Volume</div>
            <div className="weightImage">
              <img
                width={65}
                height={65}
                src="https://i.ibb.co/D8SW6jW/weightmeter.png"
                alt="weightmeter"
                border="0"
              />
            </div>
            <div className="weightValue">114.21KG</div>
          </div>
          <div className="loadBookig">
            <div className="loadTitle">Load</div>

            <div className="imageContainer">
              <div className="bookingScale">1 X</div>
              <div className="loadImage">
                <img
                  width={46}
                  height={44}
                  src="https://i.ibb.co/9g8TwQs/Vector-3.png"
                  alt="Vector-3"
                  border="0"
                />
                <div className="imageTitle">Pallets</div>
              </div>
            </div>
            <div className="LoadimageDesc">230 X 140 X 120 CM</div>
          </div>
        </div>
        <div className="LastRow">
          <div className="SellerPrimetimeWorldwide">
            <div className="TitlePrimetimeWorldwide">
              Seller: Primetime Worldwide
            </div>
            <div className="ImagePrimetimeWorldwide">
              <img
                width={141}
                height={45}
                src="https://i.ibb.co/tKHVm3z/Frame-64.png"
                alt="Frame-64"
                border="0"
              />
            </div>
          </div>
          <div className="InsuranceLastRow">
            <div className="TitleInsuranceLastRow">Insurance:Xcover.com</div>
            <div className="ImageInsuranceLastRow">
              <img
                width={219}
                height={34}
                src="https://i.ibb.co/Hp6fvVZ/Xcover.png"
                alt="Xcover"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🟡Price Section🟡 */}
      <div className="priceDetails">
        <div className="TitleAndPrice">
          <span className="priceTitle">Price details</span>
          <span className="priceBtn">
            <img
              width={9.78}
              height={9.78}
              src="https://i.ibb.co/b52q86F/Vector.png"
              alt="Vector"
              border="0"
            />{" "}
            Known shipper
          </span>
        </div>
        <div className="sellerQuota">
          <span>Seller’s Quote</span>
          <span className="sellerQuotaSpan"> $ 3,659.25</span>
        </div>
        <hr className="priceDtsUnderline " />
        <div className="DutiesAndTaxes ">
          <span>Duties and taxes</span>
          <span className="DutiesAndTaxesSpan">Not Included</span>
        </div>
        <div className="Insurance">
          <span>Insurance</span>
          <span className="InsuranceSpan">$323.40</span>
          <div className="BasedOncost">Based on the items cost</div>
        </div>

        <hr className="priceDtsUnderline " />

        <div className="Platformfee">
          <div className="promoCode">
            Add a <span> promo code</span>
          </div>
          <span>Platform fee</span>
          <span className="PlatformfeeSpan">$119.48</span>
        </div>
        <hr className="PlatformfeeUnderline " />
        <div className="totalPrice">
          <span>Total:</span>
          <span className="totalPriceSpan">$ 4,102.13</span>
        </div>
        <div className="cheackoutBtn">
          <button onClick={handleOnCheckout}>Checkout</button>
        </div>
        <div className="ellipseCheackOut">
          <img
            width={31.25}
            height={31.25}
            src="https://i.ibb.co/X2LkmcT/message2.png"
            alt="message2"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;

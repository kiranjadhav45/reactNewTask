import "./Booking.css";

const Booking = () => {
  return (
    <div className="priceAndBooking">
      <div className="bookingSummary">booking</div>
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
        </div>
        <div className="BasedOncost">Based on the items cost</div>
        <hr className="BasedOncostUnderLine " />
        <div className="promoCode">
          Add a <span> promo code</span>
        </div>
        <div className="Platformfee">
          <span>Platform fee</span>
          <span className="PlatformfeeSpan">$119.48</span>
        </div>
        <hr className="PlatformfeeUnderline " />
        <div className="totalPrice">
          <span>Total:</span>
          <span className="totalPriceSpan">$ 4,102.13</span>
        </div>
        <div className="cheackoutBtn">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

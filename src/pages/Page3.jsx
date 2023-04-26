import "./Page3.css";
import Logo from "../componets/page2/logo/Logo";
import Progress from "../componets/page2/progress/Progress";
import Booking from "../componets/page2/booking/Booking";
import Price from "../componets/page2/price/Price";

const Page3 = () => {
  return (
    <div className="page3">
      <Logo />
      <Progress />
      <Booking />
      {/* <Price /> */}
    </div>
  );
};

export default Page3;

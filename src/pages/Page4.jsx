import "./Page4.css";
import Navbar4 from "../componets/page4/navbar/Navbar4";
import ProgressBar from "../componets/page4/progressBar/ProgressBar";
import Actions4 from "../componets/page4/actions4/Actions4";
import Filter from "../componets/page4/filter/Filter";
import Transation from "../componets/page4/transation/Transation";

const Page4 = () => {
  return (
    <>
      <div className="page4">
        <Navbar4 />
        <ProgressBar />
        <Actions4 />
      </div>
      <div className="FilterPlusRow">
        <div className="filter">
          <Filter />
        </div>
        <div className="transaction">
          <Transation />
        </div>
      </div>
    </>
  );
};

export default Page4;

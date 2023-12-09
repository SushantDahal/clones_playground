import Billing from "../Images/Billing.png";
import Thought from "../Images/Thought.png";
import onof from "../Images/wifi.png";
import Manage from "../Images/loadCarry.png";

const Features = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-20">
      {/* Business On your Mobile */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 ">
        <div className="flex flex-col items-center justify-center text-center md:text-start">
          <h1>
            Businesses on<span> Your Mobile</span>
          </h1>
          <p className="pt-6 leading-7">
            With Karobar app you can manage all your <br />
            business accounting from your mobile easily.
          </p>
        </div>
        <div className=" flex justify-center">
          <img src={Thought} alt="/" className="w-[310px] " />
        </div>
      </div>
      {/* Manage Inventory */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 py-10 my-5">
        <div className=" flex justify-center lg:order-2 order-1">
          <img src={Manage} alt="/" className="w-[310px] " />
        </div>
        <div className="flex flex-col items-center justify-center text-center md:text-start lg:order-2 ">
          <h1>
            {" "}
            Manage <span>Inventory</span>
          </h1>
          <p className="pt-6 leading-7 text-center">
            Maintain your business inventory easily with <br />
            Karobar app and know how your stocks are <br />
            performing.
          </p>
        </div>
      </div>
      {/* View Business Report */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 mb-6 pb-10">
        <div className="flex flex-col items-center justify-center text-center md:text-start ">
          <h1>
            View <span>Business Reports</span>
          </h1>
          <p className="pt-6 leading-7 text-center">
            Know how your business is performing with <br />
            various insightful reports to help you make better
            <br /> business decisions.
          </p>
        </div>
        <div className=" flex justify-center ">
          <img src={Billing} alt="/" className="w-[310px] " />
        </div>
      </div>

      {/* View Business Report */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 ">
        <div className=" flex justify-center lg:order-2 order-1">
          <img src={onof} alt="/" className="w-[310px] " />
        </div>
        <div className="flex flex-col items-center justify-center text-center md:text-start lg:order-2 ">
          <h1>
            Use Both <span>Offline & Online</span>
          </h1>
          <p className="pt-6 leading-7 text-center">
            Run your business confidently with Karobar app <br /> wherever you
            are without worrying about an <br />
            internet connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

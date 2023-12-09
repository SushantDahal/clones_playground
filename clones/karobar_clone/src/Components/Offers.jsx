import first from "../Images/first.png";
import { FaCheck } from "react-icons/fa6";

const Offers = () => {
  return (
    <div className="w-[100%] bg-[#F5FcF9]    mt-16 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 col-span-3 flex mx-auto my-6">
            <img src={first} alt="" className="md:w-[250px] w-[330px]" />
          </div>
          <div className=" col-span-2 py-6 pl-12  ">
            <h1 className="py-4 px-4">What Can You Do With Karobar?</h1>

            <p className=" text-[14px] px-4">
              Karobar app is built for Nepali businesses to help them manage
              their accounting from mobile.
              <br /> Here are some of the features which you can make use of:
            </p>
            <div className="flex md:gap-12 mx-2 pt-8 ">
              <div className="lisst">
                <ul>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" /> Maintain Stocks
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" /> Record Sales &
                    Purchases
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    Quick Billing
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    View 15+ Reports
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    Import Data From Excel
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" /> Enable App Lock
                  </li>
                </ul>
              </div>
              <div className="ml-12 lisst">
                <ul>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    Manage Parties
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" /> Send Invoices
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" /> Business Stats
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    Record Income Expenses
                  </li>
                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    Use in Nepali Language
                  </li>

                  <li className="flex items-center text-xl py-2 ">
                    <FaCheck className="mx-4 text-[#39b47f]" />
                    Customize Theme
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

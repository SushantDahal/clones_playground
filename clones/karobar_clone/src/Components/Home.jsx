import Banner from "../Images/banner.b3e6f24.png";
import Google from "../Images/google..webp";
import Apple from "../Images/apple.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { BsMessenger } from "react-icons/bs";
const Home = () => {
  return (
    <div className="text-[#333333] max-w-[1280px] mx-auto md:mt-10 mt-8 h-full ">
      <div className="grid lg:grid-cols-2  gap-2 px-4 md:pt-10 pt-4 mx-auto">
        <div className="col-span-1 py-10 flex pl-4 flex-col lg:items-start  items-center ">
          <h2 className="md:text-[35px] text-2xl px-2 tracking-wider leading-[50px] text-center  md:text-start">
            <span className="text-[#00b98d]">Free Accounting </span>
            Mobile <br /> App For Nepali Businesses
          </h2>
          <p className="py-4 px-2 text-xl">Digital Nepal Digital Karobar</p>
          <div className="pt-4 px-2 flex lg:flex-row flex-col  gap-4 start">
            <button className="w-[200px]  flex items-center text-white font-thin bg-[#00b98d] h-10 rounded-md px-2 cursor-pointer  ">
              <AiOutlineGlobal className="mx-2 " /> Get Started on web
            </button>
            <button className="w-[190px]  flex items-center font-thin border-2 border-[#00b98d] h-10 rounded-md px-2  cursor-pointer ">
              <CiPlay1 className="mx-2 text-black border-1 border-[#00b98d] " />{" "}
              Watch Tutorials
            </button>
          </div>
          <p className="py-4 px-2 text-[16px]">Download App.</p>
          <div className="flex  ">
            <img src={Google} alt="/" className=" h-[46px] ml-2" />
            <img src={Apple} alt="/" className="  h-[46px] ml-2" />
          </div>
        </div>
        <div className=" mx-auto mt-5">
          <img src={Banner} alt="/" className="max-h-[400px]" />
        </div>
      </div>
      <div className="">
        <BsMessenger
          className="fixed right-4 bg-[#00b98d]  bottom-6 p-3 rounded-full text-slate-50"
          size={60}
        />
      </div>
    </div>
  );
};

export default Home;

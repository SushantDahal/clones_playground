import logo from "../Images/logo.png";
import { BiWorld } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-[100%] border-2 ">
      <div className="text-[#333333] max-w-[1280px] mx-auto flex items-center h-16 my-2 justify-between ">
        <div className=" mx-6 ">
          <img
            src={logo}
            alt="Logo images"
            className="max-h-[22px] min-w-[100px]"
          />
        </div>
        <div className="flex items-center">
          <ul className="md:flex hidden ">
            <li className="pr-4 cursor-pointer  text-xl">Home</li>
            <li className="px-4 cursor-pointer text-xl">Features</li>
          </ul>
          <button className="w-[160px] md:block hidden bg-[#00b98d] h-10 mx-4 text-white font-bold rounded-md px-2 cursor-pointer ">
            Download Now
          </button>
          <div className=" flex items-center max-w-[150px] border-[#00b98d] border-2 h-10 mx-4 text-black rounded-md cursor-pointer p-2">
            <BiWorld className=" mx-4" />
            <p>English</p>
            <IoMdArrowDropdown className="ml-4" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

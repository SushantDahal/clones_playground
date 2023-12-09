import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="max-w-[1280px] bg-[#fff] mx-auto my-10">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center ">
          <p className=" text-[18px] mr-4 font-mono">FIND US ON</p>
          <a href="https://www.youtube.com/c/karobarapp">
            <FaYoutube
              size={30}
              className="text-[#F5FcF9] bg-[#00b98d] p-2 mx-3 rounded-md"
            />
          </a>
          <a href="https://www.facebook.com/karobarapp">
            <FaFacebook
              size={30}
              className="text-[#F5FcF9] bg-[#00b98d] p-2 mx-3 rounded-md"
            />
          </a>
          <a href="https://www.instagram.com/karobarapp/">
            <FaInstagram
              size={30}
              className="text-[#F5FcF9] bg-[#00b98d] p-2 mx-3 rounded-md"
            />
          </a>
          <a href="https://www.tiktok.com/@karobarapp">
            <FaTiktok
              size={30}
              className="text-[#F5FcF9] bg-[#00b98d] p-2 mx-3 rounded-md"
            />
          </a>
          <a href="https://www.linkedin.com/company/karobar-app/">
            <FaLinkedinIn
              size={30}
              className="text-[#F5FcF9] bg-[#00b98d] p-2 mx-3 rounded-md"
            />
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fkarobarapp%2F">
            <FaTwitter
              size={30}
              className="text-[#F5FcF9] bg-[#00b98d] p-2 mx-3 rounded-md"
            />
          </a>
        </div>
        <div>
          <ul className="flex justify-end">
            <li className="mx-4 text-[16px] tracking-widest text-[#5a5757] font-mono">
              Home
            </li>
            <li className="mx-4 text-[16px] tracking-widest text-[#5a5757] font-mono">
              Privacy
            </li>
            <li className="mx-4 text-[16px] text-[#5a5757] tracking-widest font-mono">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;

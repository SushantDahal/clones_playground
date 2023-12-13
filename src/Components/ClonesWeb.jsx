import Blanxerlogo from "../logos/BlanxerLogo.svg";
import Karobarlogo from "../logos/karobarlogo.png";

const CloneWeb = () => {
  return (
    <div className=" md:mt-[350px] mt-[220px] ">
      <div className="max-w-[1000px] mx-auto bg-blue ">
        <div className="grid md:grid-cols-2 mx-10 gap-[60px] ">
          <div className="bg-black rounded-md px-2">
            <a href="https://blanxer-clone.vercel.app/">
              <img src={Blanxerlogo} alt="/" className="w-[300px]" />
            </a>
          </div>
          <div className="bg-white rounded-md px-2 border">
            <a href="https://karobar-clone.vercel.app/">
              <img src={Karobarlogo} alt="/" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneWeb;

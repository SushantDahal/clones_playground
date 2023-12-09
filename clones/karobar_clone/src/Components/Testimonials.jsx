import { FaQuoteLeft } from "react-icons/fa";
import profile1 from "../Images/profile1.png";
import profile2 from "../Images/profile2.png";

const Testimonials = () => {
  return (
    <div className="max-w-[1280px] mx-auto my-10 px-4">
      <h1 className="text-center text-3xl text-[#333333] -tracking-tighter py-10">
        How Karobar app is <span>helping users</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col bg-red-200 rounded-md p-2 px-4">
          <FaQuoteLeft size={35} className="my-4 text-[#00b98d] " />
          <p className="text-[18px]">
            Karobar mobile app really makes managing parties and their
            transactions very easy. I have been using it for several months and
            it has helped me make my Karobar digital.
          </p>
          <div className="flex items-center my-4 ">
            <img src={profile1} alt="/" className="w-[150px] rounded-lg" />
            <div className="mx-6">
              <h1 className="md:text-3xl text-2xl tracking-wide">
                <span>Ram Babu Sah</span>
              </h1>
              <h3 className="py-2 md:text-2xl text-[19px]">Sah Traders</h3>

              <h4 className="md:text-xl text-[17px]">Mithuawa-5, Rautahat</h4>
            </div>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="flex flex-col bg-red-200 rounded-md p-2 px-4">
          <FaQuoteLeft size={35} className="my-4 text-[#00b98d] " />
          <p className="text-[18px]">
            Karobar mobile app really makes managing parties and their
            transactions very easy. I have been using it for several months and
            it has helped me make my Karobar digital.
          </p>
          <div className="flex items-center my-4 ">
            <img src={profile2} alt="/" className="w-[150px] rounded-lg" />
            <div className="mx-6">
              <h1 className="md:text-3xl text-2xl tracking-wide">
                <span>Naren Raya</span>
              </h1>
              <h3 className="py-2 md:text-2xl text-[19px]">Naren Stationary</h3>

              <h4 className="md:text-xl text-[17px]">
                Sundarharaicha-7, Gothgaon
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

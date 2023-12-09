import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="w-[100%] bg-[#F5FcF9] md:h-[190px] h-[250px] mt-16  ">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 py-12">
          <div className="flex justify-around">
            <div className="  ">
              <h1 className="text-[#00b98d] ">105,000+</h1>
              <p>Downloads</p>
            </div>
            <div className="  px-4">
              <h1 className="flex text-[#00b98d]">
                4.6 <FaStar className="mt-1 ml-2" />
              </h1>
              <p>User Rating</p>
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <h1 className="text-[#00b98d] ">100,000+</h1>
              <p>Businesses</p>
            </div>
            <div>
              <h1 className="text-[#00b98d] ">Made in Nepal</h1>
              <p>Free For Nepali Businesses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;

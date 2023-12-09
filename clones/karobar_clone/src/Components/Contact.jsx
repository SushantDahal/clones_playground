import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-[100%] bg-[#F5FcF9]  mt-16  ">
      <div className="max-w-[1100px] mx-auto  my-14 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <h1 className="ml-4 py-3">Contact us</h1>
            <div className="flex flex-col">
              <div className="mx-2 flex  items-center">
                <IoMdMail
                  size={40}
                  className="bg-[#F5FcF9] text-[#00b98d] p-2 rounded-sm"
                />
                <div className="mx-4 py-2">
                  <h2 className="text-xl font-sans">Email</h2>
                  <p className="pb-2">contact@karobarapp.com</p>
                </div>
              </div>
              <div className="mx-2 flex items-center">
                <IoMdCall
                  size={40}
                  className="bg-[#F5FcF9] text-[#00b98d] p-2 rounded-sm"
                />
                <div className="mx-4 py-2">
                  <h2 className="text-xl font-sans">Phone</h2>
                  <p className="pb-2">+977 9761812176, 9828134832</p>
                </div>
              </div>
              <div className="mx-2 flex  items-center">
                <IoLocationSharp
                  size={40}
                  className="bg-[#F5FcF9] text-[#00b98d] p-2 rounded-sm"
                />
                <div className="mx-4 py-2">
                  <h2 className="text-xl font-sans">Address</h2>
                  <p className="pb-2">Jawalakhel, Lalitpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mx-10 px-4">
            <form action="">
              <h1 className="font-mono py-4">send us a message</h1>

              <div className="my-3">
                <h3 className="text-xl">Name</h3>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border w-[90%]  p-2 my-2 outline-none"
                />
              </div>
              <div className="my-3">
                <h3 className="text-xl">Phone Number</h3>
                <input
                  type="number"
                  placeholder="Enter Your Name"
                  className="border w-[90%]  p-2 my-2 outline-none"
                />
              </div>
              <div className="my-3">
                <h3 className="text-xl my-2">Message</h3>
                <textarea
                  name=""
                  placeholder="Enter Your Message"
                  className=" border h-[120px] w-[90%] p-2 outline-none"
                ></textarea>
              </div>
              <button className="w-[90%] bg-[#00b98d] my-2 py-3 rounded-md text-white text-xl font-sans ">
                Send Messsage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

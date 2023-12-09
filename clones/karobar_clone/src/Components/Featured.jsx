// Featured section in Karabar: where karobar was Featured
import ict from "../Images/ict.png";
import Techpana from "../Images/Techpana.png";
import Texhsathi from "../Images/Techsathi.png";

const Featured = () => {
  return (
    <div className="max-w-[1340px] mx-auto bg-[#fff] my-14 py-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className=" col-span-2">
          <div className=" aspect-video  mx-2 ">
            <iframe
              className=" h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/K7NFAusigP0"
              title="Useful App For Accounting And Inventory Management For Any Business | Karobar App Review"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="py-3 mx-2">
              <a
                href="https://www.youtube.com/watch?v=K7NFAusigP0&ab_channel=TechPana"
                className=" text-xl hover:text-[#00b98d] duration-150 cursor-pointer"
              >
                {" "}
                Useful App For Accounting And Inventory Management For Any
                Business | ...
              </a>
            </div>
            <img src={Techpana} alt="/" className=" w-[100px] mx-2" />
          </div>
        </div>
        {/* <div className=" col-span-1 flex md:flex-col px-4">
         */}
        <div className=" col-span-1 flex-col px-4">
          <div className="p-3 bg-white border-2 border-[#dfd8d8] rounded-md ">
            <h1 className="text-[16px] text-[#333333]">
              आफ्नो व्यवसायलाई डिजिटल बनाउने एप ‘कारोबार’, अफलाइनमा पनि प्रयोग
              गर्न सकिने
            </h1>
            <img src={ict} alt="/" className="my-4 w-[150px]" />
          </div>
          <div className="p-3 bg-white border-2 border-[#dfd8d8]  my-3  rounded-md  ">
            <h1 className="text-[16px] text-[#333333]">
              Popular Mero Karobar rebrands itself to “Karobar” App: Digital
              Khata for your Business
            </h1>
            <img src={Texhsathi} alt="/" className="my-4 w-[150px]" />
          </div>
          <div className="p-3 bg-white border-2 border-[#dfd8d8]   rounded-md ">
            <h1 className="text-[16px] text-[#333333]">
              व्यवसायको हिसाबकिताब राख्न सघाउने नेपाली एप
            </h1>
            <img src={Techpana} alt="/" className="my-4 w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
// Popular Mero Karobar rebrands itself to “Karobar” App: Digital Khata for your Business
// व्यवसायको हिसाबकिताब राख्न सघाउने नेपाली एप

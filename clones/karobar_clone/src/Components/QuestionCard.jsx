import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const QuestionCard = (props) => {
  const [show, unShow] = useState("true");

  function handleQue() {
    unShow(!show);
  }
  return (
    <div
      onClick={handleQue}
      className={
        show
          ? "h-12 mx-4 rounded-md duration-200  "
          : "h-[120px] duration-200 rounded-md  mx-4  "
      }
    >
      <div className="flex h-12 border-2 border-[#d6d2d2] bg-white  items-center justify-between cursor-pointer  ">
        <h2 className="px-4  tracking-wide">{props.question}</h2>
        <IoMdArrowDropdown size={25} className="mr-6" />
      </div>
      <p className={show ? " hidden" : "mx-8 my-2 visible text-[14px]  py-4"}>
        {props.answer}
      </p>
    </div>
  );
};

export default QuestionCard;

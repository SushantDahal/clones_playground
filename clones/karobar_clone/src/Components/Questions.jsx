import QuestionCard from "./QuestionCard";
import question from "../question";

const Question = () => {
  return (
    <div className="max-w-[1300px] mx-auto my-10">
      <h1 className="text-center text-[#333333] text-3xl my-6">
        Frequently Asked Questions
      </h1>
      <div className="grid md:grid-cols-2 bg-red-20 gap-8 my-6  py-8">
        {question.map((Entry) => (
          <>
            <QuestionCard
              id={Entry.id}
              question={Entry.question}
              answer={Entry.answer}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Question;

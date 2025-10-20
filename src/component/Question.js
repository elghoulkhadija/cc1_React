import Option from "./option";

function Question({ question, onClick, isSubmit,selectedChoix }) {
  return (
    <div className="border border-dashed border-gray-400 p-4 rounded-lg m-3">
      <h2 className="text-xl font-semibold mb-3">{question.question}</h2>

      {/* Affichage des options */}
      {question.options && question.options.map((opt, index) => (
        <Option
          key={index}
          text={opt}
          questionId={question.id}
          onClick={onClick}
          iSelection={selectedChoix===opt}  
        />
      ))}
    </div>
  );
}

export default Question;

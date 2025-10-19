import Question from "./component/Question";
import Footer from "./component/Footer";
import Header from "./component/Header";
import questions from "./component/data";
import { useState } from "react";

function App(){
        const [choix, setChoix] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);
        const [score, setScore] = useState(0);
    
    const OptionClick=(questionId, selectedOption)=>{
        const newChoix = { ...choix };  // copier l'objet existant
        newChoix[questionId] = selectedOption; 
        setChoix(newChoix); 
    }

    // Calculer le score après validation
    const calculScore = () => {
    let sc = 0;
    questions.forEach(q => {
      if (choix[q.id] === q.correct) sc++;
    });
    setScore(sc);
    setIsSubmit(true);
    };
    // Réinitialiser le quiz
    const initialQuiz = () => {
    setChoix({});
    setScore(0);
    setIsSubmit(false);
    };
    return(
    <div className="w-[55%] ml-[10%]">
        <Header titre='Mini-Application de Quiz Interactif en React'/>
           
        {questions.map(qst => (
        <Question
          key={qst.id}
          question={qst}
          onClick={OptionClick }
          isSubmit={isSubmit}
          selectedChoix={choix[qst.id]} 
        />
        ))}
        {!isSubmit ? (
            <button onClick={calculScore}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-300">
            Valider les réponses
            </button> ):
            (<button onClick={initialQuiz}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-300">
            Rejouer
            </button>)   
        }     
        <Footer score={score} totalQuest={questions.length}  isSubmit={isSubmit}/><br/>

        </div>
        
    )
}
export default App;
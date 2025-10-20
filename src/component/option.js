function Option({ text, questionId, onClick, iSelection }) {
  return (
    
      <button
        onClick={()=>onClick(questionId, text)}
        className={` p-2 m-1 rounded-lg border w-[20%] 
          ${iSelection ? 'bg-purple-400 text-white' : 'bg-gray-100 hover:bg-gray-200'}`} >
        {text}
    </button>
  
   
   
  );
}

export default Option;

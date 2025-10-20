

function Footer({score,totalQuest,}){
   
    return(
        <div className="border-2 border-dashed border-gray-400 bg-gray-100 w-[60%] h-[30%] mt-6 rounded-lg">
            <h3 className="text-center m-6 font-semibold text-red-300">Votre score : {score} / {totalQuest}</h3>
        </div>
    )
}
export default Footer;
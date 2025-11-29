import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
function MovieDetails(){
    const [movie,setMovie]=useState({});
    const { imdbID } = useParams(); 
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?apikey=4a3b711b&i=${imdbID}`)
        .then((res)=>{setMovie(res.data)})
        .catch(()=>setMovie(null));
    },[imdbID]);
    return(
        <>
            <div className="flex justify-center mt-4">
                <div className="bg-white shadow-lg rounded-xl p-3 w-full max-w-4xl">
                    <h1 className="text-center text-3xl font-bold text-yellow-700 mb-3">
                    {movie.Title}
                    </h1>
                    <div className="flex flex-col md:flex-row items-start gap-5">
                        <img src={movie.Poster} alt={movie.Title}className="w-48 h-auto rounded-lg shadow-md"/>
                        <div className="flex-1 bg-amber-50 rounded-lg p-2 mt-5 shadow-inner">
                            <p className="text-gray-800 mb-2">
                            <span className="font-bold text-amber-500">Synopsis :</span> {movie.Plot}
                            </p>
                            <p className="text-gray-800 mb-3">
                            <span className="font-bold text-amber-500">Acteurs :</span> {movie.Actors}
                            </p>
                            <p className="text-gray-800 mb-3">
                            <span className="font-bold text-amber-500">Genre :</span> {movie.Genre}
                            </p>
                            <p className="text-gray-800 mb-1">
                            <span className="font-bold text-amber-500">Note IMDb :</span> ⭐ {movie.imdbRating}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default MovieDetails;
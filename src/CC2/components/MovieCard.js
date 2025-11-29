import { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm ";
export default function MovieCard(){
    const [movies,setMovies]=useState([]);
    
    return(
        <div className="container mx-auto">
            <div className="flex justify-end mb-6">
                <SearchForm onSearch={setMovies} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {movies.map((m) => (
                <div key={m.imdbID}
                    className="bg-orange-50 shadow-lg rounded-xl overflow-hidden border border-gray-200 
                    hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="p-4">
                        <h5 className="text-lg font-bold text-gray-900">{m.Title}</h5>
                        <p className="text-gray-600 mt-1">{m.Year}</p>
                    </div>
                    <Link to={`/movie/${m.imdbID}`}
                        className="block bg-orange-800 text-white text-center px-4 py-2 mt-3 
                        rounded-lg shadow hover:bg-yellow-700 transition">Détails
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
    
}
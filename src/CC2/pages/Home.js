import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
 const [movies, setMovies] = useState([]);
    useEffect(() => {
    const trendingIDs = ["tt0111161","tt0068646","tt0468569","tt0167260"];
    
    const requests = trendingIDs.map(id => 
        axios.get(`https://www.omdbapi.com/?apikey=4a3b711b&i=${id}`)
    );

    Promise.all(requests)
        .then(responses => setMovies(responses.map(res => res.data)))
        .catch(err => console.error(err));
    }, []);


  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Films en Tendance</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.imdbID}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition" >
            <img src={movie.Poster} alt={movie.Title}className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {movie.Title}
              </h3>
              <p className="text-gray-500 text-sm">{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`}
                    className="mt-3 inline-block bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition">
                    Détails
                </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

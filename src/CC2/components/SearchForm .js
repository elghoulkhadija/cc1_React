import axios from "axios";
import {useState } from "react"
export default function SearchForm({onSearch}){
   const [search,setSearch]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios
        .get(`https://www.omdbapi.com/?apikey=4a3b711b&s=${search}`)
        .then((res) => {onSearch(res.data.Search || []);})
        .catch((err) => console.error("Erreur API :", err),onSearch([]));
    };
    return(
        <div className="mt-2 w-full shadow-md">
            <form onSubmit={handleSubmit}
                className="flex justify-end  gap-3 bg-amber-900 py-2 px-2  shadow-md">
                <input type="text"placeholder="Rechercher un film..."
                value={search}onChange={(e) => setSearch(e.target.value)}
                    className="px-6 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-white"/>
                <button type="submit"
                    className="bg-white text-amber-900 px-2 py-2 rounded-lg font-semibold 
                   hover:bg-gray-100 transition-colors">
                    Rechercher
                 </button>
            </form>

        </div>

    );
}
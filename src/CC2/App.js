import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import MovieCard from "./components/MovieCard";
import Movie from "./pages/Movies";

function App(){
    return(
    <div className="min-h-screen bg-blue-100 flex flex-col mb-2">
        <BrowserRouter>
            <NavBar />
            <div className="container mx-auto mt-8">
                <Routes>
                    <Route path="/" element={<Movie />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/recherche" element={<MovieCard />} />
                    <Route path="/movie/:imdbID" element={<MovieDetails />} />
                    
                </Routes>

            </div>

        </BrowserRouter>
    </div>

    )
}
export default App
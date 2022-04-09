import axios from "../axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row-auto text-left mt-3 mx-6 gap-y-5 ">
      <h2 className="text-4xl text-slate-100  font-extralight sm:px-3 ">
        {title}
      </h2>

      <div className="flex overflow-auto space-x-5 scrollbar-hide overflow-y-hidden p-3">
        {movies.map((movie) => (
          <img
            className="max-h-60 w-80 object-contain hover:scale-110  transition duration-300 ease-in"
            key={movie.id}
            src={`${baseUrl}${ movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;






import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import "./Banner.css";

function Banner() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="object-contain">
      <img
        className="h-[460px] w-full"
        src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
        alt=""
      />

      <div className="absolute top-36 text-white text-left px-5 sm:px-9 space-y-5">
        <h1 className="text-5xl font-bold ">{movies?.name}</h1>

        <div className="space-x-4">
          <button className="border-1 bg-transparent bg-[#333333] bg-opacity-50 px-7 cursor-pointer font-bold py-2 hover:bg-stone-100 hover:text-[#111]">
            Play
          </button>
          <button className="border-1 bg-transparent bg-[#333333] bg-opacity-50 px-7 cursor-pointer font-bold py-2 hover:bg-stone-100 hover:text-[#111]">
            My List
          </button>
        </div>

        <h4 className="max-w-sm text-sm font-sans">{truncate(movies?.overview, 150)}</h4>
      </div>
      <div className="banner-fadeBottom absolute top-[22rem]" />
    </div>
  );
}

export default Banner;


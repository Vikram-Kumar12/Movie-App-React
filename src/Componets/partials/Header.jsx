import React from "react";
import { Link } from "react-router-dom";
function Header({data}){
    //  console.log(data)
    return ( 
        <div 
         style={{
             background :`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
         }} 
         className="w-full h-[50vh] bg-red-100 flex flex-col justify-end items-start p-[5%] ">
           <h1 className="w-[60%] text-5xl font-black leading-none hover:text-zinc-400">
             {data.original_title || data.name || data.title || data.original_name}
           </h1>
           <p className="w-[60%] mt-3 mb-2 ">
             {data.overview.slice(0,200)}...<Link to={`/${data.media_type || title}/details/${data.id}`} className="text-blue-500"> {" "} more</Link>
            </p>
           <p className="">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || "No Information"}
                <i className="text-yellow-500 ml-3 ri-movie-2-line"></i>{data.media_type.toUpperCase()}
           </p>
           <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="px-3 py-1 bg-blue-500 rounded-md mt-2 hover:bg-blue-700 hover:font-semibold duration-200">Watch Trailer</Link>
        </div>
    )
}

export default Header;
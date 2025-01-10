import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.png"
function Cards({data, title}){
    // console.log(data)
    console.log(title)
    return (
        <div className="w-full flex flex-wrap p-10 bg-[#1F1E24]">
            {data.map((elem,index)=>(

                <Link to={`/${elem.media_type || title}/details/${elem.id}`} key={index} className="w-[25vh]   mb-5 mr-7 relative">
                    
                    <img 
                    src={ elem.poster_path || elem.backdrop_path || elem.profile_path ? `https://image.tmdb.org/t/p/original/${elem.poster_path || elem.backdrop_path || elem.profile_path}` : noimage} alt="no photo" className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[30vh] w-[30vh] object-cover rounded hover:scale-105"/>

                    <h1 className="text-xl font-semibold mt-1">
                        {(elem.original_title || elem.name || elem.title || elem.original_name).slice(0,10)}
                    </h1>
                    {elem.vote_average && <div className="absolute right-[-10%] bottom-[30%] w-[7vh] h-[7vh] bg-yellow-500 rounded-full flex items-center justify-center text-xl font-semibold">
                        {(elem.vote_average*10).toFixed()} <sup>%</sup>
                    </div>}
                </Link>

            ))}
            
        </div>
    )
}
export default Cards;
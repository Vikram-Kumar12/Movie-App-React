import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.png"
function HorizontalCards({data}){
    return (
        <div className=" w-[100%] flex overflow-y-hidden p-5">
            {data.length > 0 ? data.map((elem,index)=>(
                <Link to={`/${elem.media_type}/details/${elem.id}`} key={index} className="min-w-[15%] h-[35vh]  mr-5 bg-zinc-900 hover:scale-105 rounded mb-5">
                    <img className="w-full h-[55%] object-cover rounded"
                        src={ elem.backdrop_path || elem.poster_path ? `https://image.tmdb.org/t/p/original/${elem.backdrop_path || elem.poster_path}` : noimage} 
                    alt="" />
                    <div className="h-[45%] overflow-y-auto">
                        <h1 className="mt-1 text-lg font-semibold pl-1 leading-none">
                            {(elem.original_title || elem.name || elem.title || elem.original_name)}
                        </h1>
                        <p className="mt-2 text-sm pl-1 ">
                            {elem.overview ? elem.overview.slice(0, 50) : "No description available"}...<span className="text-zinc-500"> more</span>
                        </p>
                    </div>
                </Link>
            )) : <h1 className="text-2xl font-bold mt-3">Nothing in Recommendation</h1>}
        </div>
    )
}
export default HorizontalCards;

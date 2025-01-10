import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";
function Trailer(){
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideos = useSelector((state)=>state[category].info.videos)
    return(
        <div className="w-[90%] h-full bg-black top-[0] rounded-md absolute z-[100] mt-3">
            <h1 className="flex items-center justify-between p-3 mb-2">
                <span className="text-2xl font-semibold ">Play Trailer</span>
                <Link onClick={()=> navigate(-1)} className="ri-close-fill  cursor-pointer text-2xl px-2 py-1 rounded-lg hover:bg-[#0F0F0F]"></Link>
            </h1>
            {ytvideos ? <ReactPlayer
             controls
             height={500}
             width={1223}
             url={`https://www.youtube.com/watch?v=${ytvideos.key}`}/> : <NotFound/>
            }
        </div>
    ) 
}
export default Trailer;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personaction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards"
import noimage from "/noimage.png"
import Dropdown from "./partials/Dropdown";
function PersonDetails(){
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {id} = useParams();
    const [category,setcategory] = useState("movie")
    const {info} = useSelector((state)=>state.person);
    console.log(info)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asyncloadperson(id))
        return ()=>{
            dispatch(removeperson())
        }
    },[id])
    return info ?  (
        <div className="px-[8%] w-full overflow-y-auto ">
            {/* part 1 for navigation */}
            <nav className="w-full h-[10vh] flex gap-10 items-center">
                <Link onClick={()=> navigate(-1)} className="ri-arrow-left-fill cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-400"></Link>
            </nav>
            {/* part 2 image part  */}
            <div className="w-full flex ">
                <div className="w-[20%]">
                    <img 
                        src={info.detail.profile_path ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}` : noimage} alt="" className="h-[40vh] w-[30vh]  object-cover rounded-xl shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mt-3 ml-2 hover:scale-105"
                    />

                    <hr className=" mt-5 mb-4 border-none h-[1px] bg-zinc-500 "/>
                    {/* social media account  */}
                    <div className="flex gap-5 text-2xl">

                        <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalids.wikidata_id}`} ><i className="ri-earth-fill px-2 py-1 rounded-md hover:bg-zinc-400"></i></a>

                        <a target="_blank" href={`https://www.facebook.com/${info.externalids.facebook_id}`} ><i className="ri-facebook-fill px-2 py-1 rounded-md hover:bg-zinc-400"></i></a>

                        <a target="_blank" href={`https://www.instagram.com/${info.externalids.instagram_id}/`} ><i className="ri-instagram-fill px-2 py-1 rounded-md hover:bg-zinc-400"></i></a> 

                        <a target="_blank" href={`https://x.com/${info.externalids.twitter_id}/`} ><i className="ri-twitter-x-fill px-2 py-1 rounded-md hover:bg-zinc-400"></i></a>

                    </div>

                    {/* personal details :  */}
                    <div>
                        <h1 className="text-2xl font-semibold text-zinc-400 mt-3 hover:text-zinc-100">Person Information</h1>

                        <h1 className="mt-3 font-semibold hover:text-zinc-400">Known_for_department </h1>
                        <h2 className="text-zinc-400 font-semibold hover:text-zinc-100">{info.detail.known_for_department}</h2>

                        <h1 className="mt-3 font-semibold hover:text-zinc-400">Gender </h1>
                        <h2 className="text-zinc-400 font-semibold hover:text-zinc-100">{info.detail.gender === 1 ? "Female" : "Male"}</h2>

                        <h1 className="mt-3 font-semibold hover:text-zinc-400">Birthday </h1>
                        <h2 className="text-zinc-400 font-semibold hover:text-zinc-100">{info.detail.birthday}</h2>

                        <h1 className="mt-3 font-semibold hover:text-zinc-400">Deathday </h1>
                        <h2 className="text-zinc-400 font-semibold hover:text-zinc-100">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h2>

                        <h1 className="mt-3 font-semibold hover:text-zinc-400">Place_of_birth</h1>
                        <h2 className="text-zinc-400 font-semibold hover:text-zinc-100">{info.detail.place_of_birth}</h2>

                        <h1 className="mt-3 font-semibold hover:text-zinc-400">Also_known_as (Nickname) </h1>
                        <h2 className="text-zinc-400 font-semibold hover:text-zinc-100">{info.detail.also_known_as.join(" , ")
                        }</h2>

                    </div>

                </div>

                {/* part 3 detail and information */}
                <div className="w-[80%] ml-[5%] ">
                    <h1 className="text-6xl font-black hover:text-zinc-400">{info.detail.name}</h1>

                    <h1 className="text-xl mt-3 font-semibold">Biography</h1>
                    <p className="text-zinc-400 font-semibold mt-3 text-sm hover:text-zinc-300">{info.detail.biography ? info.detail.biography : " No Biography"}</p>

                    <h1 className="text-xl mt-3 font-semibold">Know for</h1>
                    <HorizontalCards data={info.combinedcredits.cast}/>

                    <div className="w-full flex justify-between mt-10">
                        <h1 className="text-2xl font-semibold hover:text-zinc-400">Acting Carrer</h1>
                        <Dropdown title="Category" options={["tv","movie"]} func={(e)=>setcategory(e.target.value)}/>
                    </div>

                    <div className="w-full h-[60vh] mt-5 shadow-xl shadow-[rgba(255,255,255,0.3)] mb-10 border-2 border-zinc-700 overflow-x-hidden overflow-y-auto p-5 list-disc text-zinc-400">
                        {info[category + "credits"] && info[category + "credits"].cast?.length > 0 ? (
                            info[category + "credits"].cast.map((elem, index) => (
                                <li
                                    key={index}
                                    className="hover:text-white p-5 rounded hover:bg-zinc-900 cursor-pointer"
                                >
                                <Link to={`/${category}/details/${elem.id}`}>
                                    <span>
                                        {category === "movie" ? "Movie Name : " : "TV Show Name : "}
                                        {elem.original_title || elem.name || elem.title || elem.original_name || "Unknown"}
                                    </span>
                                    {elem.character && (
                                        <span className="block ml-5">Character Name : {elem.character}</span>
                                    )}
                                </Link>
                            </li>
                            ))
                        ) : (
                            <p className="text-center text-zinc-400">No data available for this category.</p>
                        )}
                    </div>

                    <h1 className="mt-5"></h1>
                </div>

            </div>

        </div>
    ) : <Loading/>
}
export default PersonDetails;
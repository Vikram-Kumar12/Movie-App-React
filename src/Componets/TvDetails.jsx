import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards"
import noimage from "/noimage.png"
function TvDetails(){
     const {pathname} = useLocation()
        const navigate = useNavigate()
        const {id} = useParams();
        const {info} = useSelector((state)=>state.tv);
        console.log(info)
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(asyncloadtv(id))
            return ()=>{
                dispatch(removetv())
            }
        },[id])

    return info ?  (
        <div

            style={{
                background :`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
               
            }} 
        className="w-full h-full bg-red-100 px-[5%] overflow-y-auto overflow-x-auto relative ">

            {/* part 1 for navigation */}
            <nav className="w-full h-[10vh] flex gap-10 items-center">
                <Link onClick={()=> navigate(-1)} className="ri-arrow-left-fill  cursor-pointer px-3 py-1  rounded-md hover:bg-zinc-500 text-xl"></Link>
                <a target="_blank" href={info.detail.homepage} ><i className="ri-external-link-fill px-3 py-1  rounded-md hover:bg-zinc-500 "></i></a>
                <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalids.wikidata_id}`} ><i className="ri-earth-fill hover:bg-zinc-500  px-3 py-1  rounded-md "></i></a>
                <a target="_blank" href={`https://www.imdb.com/title/${info.externalids.imdb_id}/`} className=" px-3 py-1  rounded-md hover:bg-zinc-500 ">IMDb</a>
            </nav>

            {/* part 2 poster and details */}
            <div className="w-full flex mt-3 ">
                <img 
                    src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path || info.detail.profile_path}`} alt="no photo" className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[80vh] object-cover rounded mt-3 "
                />

                <div className="ml-10">

                    <h1 className="text-5xl font-bold hover:text-zinc-400">
                        {(info.detail.original_title || info.detail.name || info.detail.title || elem.original_name )}
                        <span className="text-3xl font-semibold text-zinc-300">({info.detail.first_air_date.split("-")[0]})</span>
                    </h1>

                    <div className="flex items-center gap-x-4  mt-2 text-lg mb-5">
                        <div className="w-[7vh] h-[7vh]  bg-yellow-500 rounded-full flex items-center justify-center text-xl         font-semibold hover:scale-105">
                        {(info.detail.vote_average*10).toFixed()} <sup>%</sup>
                        </div>

                        <h1 className="text-2xl font-semibold w-[60px]">User Score</h1>
                        <span className="text-xl font-semibold text-zinc-300">({info.detail.first_air_date})</span>
                        <h1 >{info.detail.genres.map((g,i)=>g.name).join(",") }</h1>
                        {/* <h1 className="">{(info.detail.runtime)}min</h1> */}
                    </div>

                    <h1 className="text-xl font-semibold italic text-zinc-200 mb-3">{info.detail.tagline}</h1>
                    <h1 className="text-2xl font-medium mb-3">Overview</h1>
                    <p className="text-sm  mt-1 leading-none mb-3">{info.detail.overview}</p>
                    <h1 className="text-2xl font-medium mb-3">tv Translated</h1>
                    <p className="text-sm  mt-1 leading-none mb-7">{info.translations.join(" , ")}</p>

                    
                    <Link className="p-3 text-xl font-semibold hover:text-zinc-400 bg-[#6556cd] rounded-lg" to={`${pathname}/trailer`}><i className="ri-play-fill "></i> Play Trailer</Link>
                   
                    {/* part 3 Available on plateform */}
                    <div className="mt-10">
                    {info.watchproviders && info.watchproviders.flatrate && (
                        <div className="flex gap-x-3 mb-3 items-center mt-10">
                            <h1 className="">Available on Platform : </h1>
                            {info.watchproviders.flatrate.map((elem,index)=>(
                                <img key={index}  
                                    title={elem.provider_name}
                                    src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`} alt="" className="h-[5vh] w-[5vh] object-cover rounded-md  "
                                />
                            ))}
                        </div> 
                    )}

                    {info.watchproviders && info.watchproviders.rent && (
                        <div className="flex gap-x-3 mb-3 items-center">
                            <h1>Available on Rent : </h1>
                            {info.watchproviders.rent.map((elem,index)=>(
                                <img key={index}  title={elem.provider_name}
                                    src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`} alt="" className="h-[5vh] w-[5vh] object-cover rounded-md  "
                                />
                            ))}
                        </div>
                        
                    )}

                    {info.watchproviders && info.watchproviders.buy && (
                        <div className="flex gap-x-3 mb-3 items-center">
                            <h1>Available to Buy : </h1>
                            {info.watchproviders.buy.map((elem,index)=>(
                                <img key={index}
                                title={elem.provider_name}
                                    src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`} alt="" className="h-[5vh] w-[5vh] object-cover rounded-md  "
                                />
                            ))}
                        </div>
                            
                    )}
                    </div>

                </div>
            </div>

            {/* part 3 Available on plateform */}                
            {/* <div className="">
                    {info.watchproviders && info.watchproviders.flatrate && (
                        <div className="flex gap-x-3 mb-3 items-center">
                            <h1 className="">Available on Platform : </h1>
                            {info.watchproviders.flatrate.map((elem,index)=>(
                                <img key={index}  
                                    title={elem.provider_name}
                                    src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`} alt="" className="h-[5vh] w-[5vh] object-cover rounded-md  "
                                />
                            ))}
                        </div>
                        
                    )}
                    {info.watchproviders && info.watchproviders.rent && (
                        <div className="flex gap-x-3 mb-3 items-center">
                            <h1>Available on Rent : </h1>
                            {info.watchproviders.rent.map((elem,index)=>(
                                <img key={index}  title={elem.provider_name}
                                    src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`} alt="" className="h-[5vh] w-[5vh] object-cover rounded-md  "
                                />
                            ))}
                        </div>
                        
                    )}
                    {info.watchproviders && info.watchproviders.buy && (
                        <div className="flex gap-x-3 mb-3 items-center">
                            <h1>Available to Buy : </h1>
                            {info.watchproviders.buy.map((elem,index)=>(
                                <img key={index}
                                title={elem.provider_name}
                                    src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`} alt="" className="h-[5vh] w-[5vh] object-cover rounded-md  "
                                />
                            ))}
                        </div>
                        
                    )}
            </div> */}

            {/* part 4 Seasons */}
            <hr className=" mt-5 mb-5 border-none h-[1px] bg-zinc-500 "/>
            {info.detail.seasons && <h1 className="ml-7 text-2xl font-bold mb-5">Seasons</h1>}

            <div className="flex overflow-y-auto w-full">
                {info.detail.seasons.length > 0 ? info.detail.seasons.map((elem,index)=>(
                    <div className="w-[20vh] mr-[8%]">
                        <img 
                            src={elem.poster_path || elem.backdrop_path || elem.profile_path ? `https://image.tmdb.org/t/p/original/${elem.poster_path || elem.backdrop_path || elem.profile_path}` : noimage} alt="" className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  min-w-[14vw] h-[40vh] object-cover rounded hover:scale-105 ml-3"
                        />

                        <h1 className="text-xl font-semibold mt-1 flex mb-5 ">
                            {(elem.original_title || elem.name || elem.title || elem.original_name).slice(0,10)}
                        </h1>
                    </div>
                    )) : (
                        <h1 className="text-2xl font-bold mt-3">Nothing to show</h1>
                    )
                }
            </div>


            {/* part 5 recommendation and similar stuff */}
            <hr className=" mt-5 mb-5 border-none h-[1px] bg-zinc-500 "/>
            {info.recommendations > 0 ||  info.similar && <h1 className="ml-7 text-2xl font-bold ">Recommendations & Similar Stuff</h1>}
            
            <HorizontalCards 
                data={info.recommendations > 0 ? info.recommendations : info.similar}
            />
            <Outlet/>
        </div>
    ) : (<Loading/>)
}
export default TvDetails;
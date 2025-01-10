import React from "react";
import { Link } from "react-router-dom";
import logo1 from "/logo1.webp"
function SideNav(){
    return (
        <>
            <div className='w-[20%] h-full border-r-[1px] border-zinc-800 p-6'>
                
                <h1 className="hover:scale-105 cursor-pointer mb-2">
                    <img className="" src={logo1} alt="" />
                    {/* <i className="ri-tv-fill  mr-2 text-[#6556cd]" ></i>
                    <span className="font-bold text-blue-500 ">Movie.Com</span> */}
                </h1>

                <nav className="flex flex-col text-zinc-400 text-lg font-semibold">
                    <h1 className="text-xl font-semibold mt-4 mb-3 text-white hover:scale-105 duration-300 ">New Feeds</h1>
                    <Link to="/trending" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="ri-fire-fill mr-0"></i>
                    Trending</Link>
                    <Link to="/popular" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="ri-bard-fill mr-1"></i>
                    Popular</Link>
                    <Link to="/movie" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="ri-movie-2-fill mr-1"></i>
                    Movies</Link>
                    <Link to="/tv" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="mr-1 ri-tv-2-fill"></i>
                    Tv Shows</Link>
                    <Link to="/person" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="mr-1 ri-team-fill"></i>
                    People</Link> 
                </nav>

                <hr className="border-none h-[1px] bg-zinc-700 mt-1"/>

                <nav className="flex flex-col text-zinc-400 text-lg font-semibold">
                    <h1 className="text-xl font-semibold mt-4 mb-2 text-white hover:scale-105 duration-300">Website Informations</h1>
                    <Link to="/about us" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="ri-information-fill mr-1"></i>
                    About</Link>
                    <Link to="/contact us" className="p-4 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 ">
                    <i className="ri-phone-fill mr-1"></i>
                    Contact Us</Link>
                </nav>

            </div>
        </>
    )
}
export default SideNav
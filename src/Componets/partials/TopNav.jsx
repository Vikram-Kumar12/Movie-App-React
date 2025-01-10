import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.png"
function TopNav(){
    const [query,setquery] = useState("");
    // console.log(query)

    const [searches,setsearches] = useState([]);
    // console.log(searches)

    const getsearches = async ()=>{
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`);
            // console.log(d);
            // console.log(data.results)
            setsearches(data.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getsearches();
    },[query])
    
    return (

        <div className="w-[80%] h-[10vh]  mt-2 relative text-zinc-400 pt-1  flex items-center mx-auto">
           <i className="text-3xl  ri-search-line "></i>
           <input onChange={(e)=>setquery(e.target.value)}
           value={query}
            type="text" placeholder="Search for movies..." 
            className="w-[60%] p-4 mx-10 outline-none text-xl font-semibold text-zinc-200 border-none bg-transparent"
           />
           {query.length > 0 && 
                <i onClick={()=>setquery("")}
                className="text-3xl ri-close-line">
                </i>
            }
        
            <div className="z-[100] absolute w-[60%] left-[8%] max-h-[50vh] bg-zinc-300 top-[100%] overflow-auto">
               {/* ye hamara inline tage hai to height, width nhi lega uske liye esko inline-block karna padega, lekin flex use karenge tab inline-block nhi likhte hai */}
                {searches.map((elem,index)=>(
                    <Link to={`/${elem.media_type}/details/${elem.id}`} key={index} className="p-5 flex items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300"> 
                        <img className="w-[15vh] h-[15vh] object-cover rounded mr-5"
                        src={ elem.backdrop_path || elem.profile_path ? `https://image.tmdb.org/t/p/original${elem.backdrop_path || elem.profile_path}` : noimage} 
                        alt=""></img>
                        {/* <span className="text-medium font-semibold ">
                        {elem.original_title || elem.name || elem.title || elem.original_name }
                        </span> */}
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default TopNav;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loading from "../Componets/Loading"
import InfiniteScroll from 'react-infinite-scroll-component';
function Trending(){
    const navigate = useNavigate();

    const [category,setcategory] = useState("all");
    const [duration,setduration] = useState("day");
    const [trending,settrending] = useState([]);
    const [page,setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Movie | Trending " + category.toUpperCase();

    const getTrending = async ()=>{
        try {
            const url = `/trending/${category}/${duration}?page=${page}`
             console.log(url);
            const {data} = await axios.get(url)
            if(data.results.length > 0){
                // console.log(d);
                // settrending(data.results);
                settrending((prevState)=> [...prevState, ...data.results])
                setpage(page + 1)
                console.log(data);
            }else {
                sethasMore(false);
            }
            
        } catch (error) {
            console.log(error);
            // if (error.response) {
            //     // If the server responded with an error (e.g., 400 or 500)
            //     console.error('Error response:', error.response.data);
            //     console.error('Status code:', error.response.status);
            // } else if (error.request) {
            //     // If no response was received
            //     console.error('No response received:', error.request);
            // } else {
            //     // Other errors
            //     console.error('Error message:', error.message);
            // }
        }
    }
    const refreshHandler = ()=>{
        if(trending.length === 0){
            getTrending();
        }else{
            setpage(1);
            settrending([]);  
            getTrending()
        }
    }
    // console.log(trending);
    useEffect(()=>{
        refreshHandler();
    },[category,duration]);

    return trending.length > 0 ?  (
        <div className="w-full h-full">

            <div className="w-full flex items-center justify-between">
               <h1 className="text-2xl text-zinc-400 font-bold p-5">
                    <i onClick={()=> navigate(-1)} className="ri-arrow-left-fill hover:text-[#6556cd] cursor-pointer"></i>
                    <span className="hover:text-zinc-200">Trending <span className="text-lg font-semibold">({category.toUpperCase()})</span></span>
                </h1>
                <div className="flex items-center w-[80%] ">
                    <TopNav/>
                    <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=> setcategory(e.target.value)}/>
                    <div className="w-[2%]"></div>
                    <Dropdown title="Duration" options={["day","week"]} func={(e)=> setduration(e.target.value)}/>
                </div>
            </div>

            <InfiniteScroll
            // for infinte scrolling
             dataLength={trending.length}
             next={getTrending}
             hasMore={hasMore}
             loader={<h1>Loading....</h1>}>
              <Cards data={trending} title={category}/>
            </InfiniteScroll>
            
        </div>
    ) : (<Loading/>)
}
export default Trending;
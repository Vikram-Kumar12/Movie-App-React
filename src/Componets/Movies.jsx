import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loading from "../Componets/Loading"
import InfiniteScroll from 'react-infinite-scroll-component';
function Movies(){
    const navigate = useNavigate();

    const [category,setcategory] = useState("now_playing");
    const [movie,setmovie] = useState([]);
    const [page,setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Movie | Movie " + category.toUpperCase();

    const getMovie = async ()=>{
        try {
            const url = `/movie/${category}?page=${page}`
             console.log(url);
            const {data} = await axios.get(url)
            if(data.results.length > 0){
                // console.log(d);
                // setmovie(data.results);
                setmovie((prevState)=> [...prevState, ...data.results])
                setpage(page + 1)
                console.log(data);
            }else {
                sethasMore(false);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    const refreshHandler = ()=>{
        if(movie.length === 0){
            getMovie();
        }else{
            setpage(1);
            setmovie([]);  
            getMovie()
        }
    }
    // console.log(movie);
    useEffect(()=>{
        refreshHandler();
    },[category]);

    return movie.length > 0 ?  (
        <div className="w-full h-full">

            <div className="w-full flex items-center justify-between">
               <h1 className="text-2xl text-zinc-400 font-bold p-5">
                    <i onClick={()=> navigate(-1)} className="ri-arrow-left-fill hover:text-[#6556cd] cursor-pointer"></i>
                    <span className="hover:text-zinc-200 text-nowrap">Movie <span className="text-lg font-semibold">({category.toUpperCase()})</span></span>
                </h1>
                <div className="flex items-center w-[80%] ">
                    <TopNav/>
                    <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=> setcategory(e.target.value)}/>
                    <div className="w-[2%]"></div>
                </div>
            </div>

            <InfiniteScroll
            // for infinte scrolling
             dataLength={movie.length}
             next={getMovie}
             hasMore={hasMore}
             loader={<h1>Loading....</h1>}>
              <Cards data={movie} title="movie"/>
            </InfiniteScroll>
            
        </div>
    ) : (<Loading/>)
}
export default Movies;
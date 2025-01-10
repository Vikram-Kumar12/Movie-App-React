import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Cards";
import Loading from "./Loading";
import axios from "../utils/axios";
function People() {
    const navigate = useNavigate();

    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Movie | People " + category.toUpperCase();
    const getPeople = async () => {
        try {
            const url = `/person/popular?page=${page}`;
            console.log(url);
            const { data } = await axios.get(url);
            if (data.results.length > 0) {
                setpeople((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
                console.log(data);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refreshHandler = () => {
        setpage(1);
        setpeople([]);
        getPeople();
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return people.length > 0 ?  (
        <div className="w-full h-full">

            <div className="w-full flex items-center justify-between">
               <h1 className="text-2xl text-zinc-400 font-bold p-5">
                    <i onClick={()=> navigate(-1)} className="ri-arrow-left-fill hover:text-[#6556cd] cursor-pointer"></i>
                    <span className="hover:text-zinc-200 text-nowrap">People <span className="text-lg font-semibold">({category.toUpperCase()})</span></span>
                </h1>
                <div className="flex items-center w-[80%] ">
                    <TopNav/>
                </div>
            </div>

            <InfiniteScroll
            // for infinte scrolling
             dataLength={people.length}
             next={getPeople}
             hasMore={hasMore}
             loader={<h1>Loading....</h1>}>
              <Cards data={people} title="person"/>
            </InfiniteScroll>
            
        </div>
    ) : (<Loading/>)

}

export default People;

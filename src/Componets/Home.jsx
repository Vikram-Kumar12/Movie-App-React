import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav';
import TopNav from './partials/TopNav';
import Header from './partials/Header';
import axios from '../utils/axios';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
function Home() {
    document.title = "Movie Project | HomePage"

    // for header part :->
    const [welpaper,setwelpaper] = useState(null)
    // for horizontal cards :->
    const [trending,settrending] = useState(null)
    // for category :->
    const [category,setcategory] = useState("all")

    const getheaderwalpaper = async ()=>{
      try {
        const {data} = await axios.get(`/trending/all/day`)
        // console.log(d)
        // console.log(data.results)
        // setwelpaper(data.results)
        let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
        // console.log(randomdata)
        setwelpaper(randomdata)
      } catch (error) {
        console.log(error);
      }
    }
    //  console.log(welpaper)
    useEffect(()=>{
      !welpaper && getheaderwalpaper();
      // getheaderwalpaper();
    }, [])

    
    const gettrending = async ()=>{
      try {
        const {data} = await axios.get(`/trending/${category}/day`)
        settrending(data.results)
      } catch (error) {
        console.log(error);
      }
    }
    console.log(trending)
    useEffect(()=>{
      gettrending();
      !welpaper && getheaderwalpaper();
    }, [category])

  return welpaper && trending ?  (
    <>
        <SideNav/>
        <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
            <TopNav/>
            <Header data={welpaper}/>

            <div className="flex justify-between p-5">
                <h1 className="text-3xl text-zinc-400 font-semibold hover:text-zinc-100">Trending</h1>
                <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setcategory(e.target.value)}/>
            </div>

            <HorizontalCards data={trending}/>
        </div>
    </>
  ) : (<Loading/>)
}
export default Home;
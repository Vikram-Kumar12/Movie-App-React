import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Componets/Home'
import Trending from './Componets/Trending'
import Popular from './Componets/Popular'
import Movies from './Componets/Movies'
import Tvshows from './Componets/Tvshows'
import People from './Componets/People'
import About from './Componets/About'
import Contactus from './Componets/Contactus'
import MovieDetails from './Componets/MovieDetails'
import TvDetails from './Componets/TvDetails'
import PersonDetails from './Componets/PersonDetails'
import Trailer from './Componets/partials/Trailer'
import NotFound from './Componets/NotFound'

function App() {
  return (
    <div className='w-full h-screen bg-[#1F1E24] flex text-white '>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/2" element={<Loading/>}/> */}
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>

        <Route path='/movie' element={<Movies/>}/>
          <Route path="/movie/details/:id" element={<MovieDetails/>}>
            <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
          </Route>
      

        <Route path='/tv' element={<Tvshows/>}/>
        <Route path="/tv/details/:id" element={<TvDetails/>}>
          <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        
        <Route path='/person' element={<People/>}/> 
          <Route path="/person/details/:id" element={<PersonDetails/>}/>
       

        <Route path="/about us" element={<About/>}/>
        <Route path="/contact us" element={<Contactus/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "pages/List Of Now Playing"
import Detail from "pages/Detail Movie"
import Favorite from "pages/List Favorite Movie Page"
import NotFound from 'pages/NotFound'

function App()  {  
    return (
      <BrowserRouter>
      <Routes> 
         <Route path='/' element={<Home />}/>
         <Route path='/detail/:id_movie' element={<Detail />}/>
         <Route path='/Favorite' element={<Favorite/>}/>
         <Route path='*' element= {<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
  }


export default App
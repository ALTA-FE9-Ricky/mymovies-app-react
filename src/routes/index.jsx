import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from "pages/List Of Now Playing"
import Detail from "pages/Detail Movie"
import Favorite from "pages/List Favorite Movie Page"
import NotFound from 'pages/NotFound'

import { ThemeContext } from 'utils/context'
import { setFavorites } from 'utils/redux/reducers/reducer'

function App()  {  
  const dispatch = useDispatch()
  const [ isLight, setIsLight] = useState(true)
  const theme = useMemo(() => ({isLight,setIsLight}), [isLight])

  useEffect(() => {
    if(isLight){
      document.documentElement.classList.remove('dark')
    }else{
      document.documentElement.classList.add('dark')
    }
  },[isLight])

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies")
    if (getMovies){
      dispatch(setFavorites(JSON.parse(getMovies)))
    }
  },[])
    return (
      <ThemeContext.Provider value={theme}>
      <BrowserRouter>
      <Routes> 
         <Route path='/' element={<Home />}/>
         <Route path='/detail/:id_movie' element={<Detail />}/>
         <Route path='/Favorite' element={<Favorite/>}/>
         <Route path='*' element= {<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    )
  }


export default App
import { useState,useEffect } from "react";
import 'styles/App.css';
import { useDispatch } from "react-redux";
import { WithRouter } from "utils/Navigation";
import { setFavorites } from "utils/redux/reducers/reducer";
import Layout from "components/Layout";
import axios from "axios";
import Card from "components/card";
import { ButtonPrimary } from "components/Button";
import { useTitle } from "utils/useTitle";

function App(props){
    const dispatch = useDispatch()
    const [title] = useState("List Of Now Playing")
    const [datas,setDatas] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    useTitle("List Now Playing")

    useEffect(() => {
        fetchdata()

    },[])

    function handleFav(movie) {
        const getMovies = localStorage.getItem("favMovies")
        if (getMovies){
            const parsedMovies = JSON.parse(getMovies)
            parsedMovies.push(movie)
            const temp = JSON.stringify(parsedMovies)
            dispatch(setFavorites(parsedMovies))
            localStorage.setItem("favMovies",temp)
        } else{
            const temp = JSON.stringify([movie])
            dispatch(setFavorites([movie]))
            localStorage.setItem("favMovies",temp)
        }
    }
    
    function fetchdata(){
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`)
    .then((res) =>{
        const { results } =res.data
        const newPage = page + 1
        const temp = [...datas]
        temp.push(...results)
        setDatas(temp)
        setPage(newPage)
    })
    .catch((err) =>{
        alert(err.toString())
    })
    .finally(() =>{
        setLoading(false)
    })
    }
    

        return(
        <>
        <Layout>
        <div className="w-full flex flex-col">
            {/* <p className="text-center">{title}</p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
            {datas.map((data) => (
                <Card
                 key={data.id}
                 image={data.poster_path}
                 title={data.title}
                 onNavigate={() => props.navigate(`/detail/${data.id}`)}
                 addFavorite={() => handleFav(data)}
                />
            ))}
            </div>
            <ButtonPrimary label="Load More" onClick={() => fetchdata()}/>
        </div>
        </Layout>
        </>
        )
    }

export default WithRouter(App)
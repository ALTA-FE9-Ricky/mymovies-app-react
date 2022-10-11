import React,{ useEffect,useState} from "react";
import 'styles/App.css';
import Card2 from "components/card2";
import { WithRouter } from "utils/Navigation";
import Layout from "components/Layout";
import { useTitle } from "utils/useTitle";
// import axios from "axios";

function Favorite(){
    const [titles] = useState("List Your Favorite Movie")
    const [datas,setDatas] = useState([])
    const [loading,setLoading] = useState(true)
    useTitle("List Your Favorite Movie")

    useEffect(() => {
        fetchdata()
    },[])


    function handleRemoveFav(movie){
        const rem = datas.filter((e) => e !== movie)
        setDatas(rem)
        localStorage.setItem("favMovie",rem)
    }
    
    function fetchdata(){
    const getMovies = localStorage.getItem("favMovies")
    if(getMovies){
        const parsedMovies = JSON.parse(getMovies)
        setDatas(parsedMovies)
        setLoading(false)
    }
    }
    
        return(
            <>
        <Layout>
        <div className="w-full flex flex-col">
            <p className="text-center">{titles}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
            {datas.map((data) => (
                <Card2
                 key={data.id}
                 image={data.poster_path}
                 title={data.title}
                //  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                 addFavorite={() => handleRemoveFav(data)}
                />
            ))}
            </div>
        </div>
        </Layout>
        </>
        )
    }


export default WithRouter(Favorite)
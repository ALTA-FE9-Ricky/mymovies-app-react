import React, { useEffect, useState} from "react"
import axios from "axios";
import 'styles/App.css';
import Layout from "components/Layout"
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/useTitle";
import { useFetchGet } from "utils/useFetchGet";

function DetailMovie(props){
        const { id_movie } = props.params
        const [data] = useFetchGet(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=976fb07f6e28d0eb75915ad2c1b0836e&append_to_response=videos`)
        const [detail, setDetail] = useState(data)
        const [loading, setLoading] = useState(true)
        const [videos, setVideos] = useState([])
        // const [genres,setGenres] = useState([])
        useTitle("Detail Movie")

    function fetchdata(){
      axios
      .get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=976fb07f6e28d0eb75915ad2c1b0836e&append_to_response=videos`)
      .then ((res) =>{
        const { data } = res
        setDetail(data)
        setVideos(data.videos.results)
      })
      .catch ((err) => {
        alert(err.toString())
      })
      .finally(() => {
        setLoading(false)})
    }

    useEffect(() => {
      data.videos !== undefined && setVideos(data?.videos?.results)
      // data.genres !== undefined && setGenres(data?.genres?.results)
    },[data])
    
    return (
      <Layout>
        <div className="flex p-24 content-center flex-col md:flex-row lg:flex-row gap-10">
        <img className="w-80 h-4/12" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={props.title} />
        <div className="flex flex-col md:flex-col lg:flex-col">
        <h1 className="text-5xl">{data.title}</h1>
        <br />
        <p className="text-lg">Release Date: {data.release_date}</p>
        <br />
        <p className="text-lg">Runtime: {data.runtime} Minutes</p>
        <br />
        <p className="text-lg">Language: {data.original_language}</p>
        <br />
        <p className="text-lg">Popularity: {data.popularity}</p>
        <br />
        <p className="text-lg">Budget: {data.budget} $</p>
        <br />
        <p className="text-lg">Revenue: {data.revenue} $</p>
        <p className="text-lg">Revenue: {data.genres} $</p>
        <br />
        <p className="text-lg">Status: {data.status}</p>
        </div>
        </div>
        <p className="flex flex-col px-16 text-xl"> Overview <br />{data.overview}</p>
        <br />
        <p className="text-xl font-bold px-16">Result for movie Videos,trailer or etc : </p>
        <br />
        <div className="flex flex-col md:flex-col lg:flex-col gap-4 justify-center px-96">
          {videos.map((video) => (
            <iframe
            id={video.id}
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${video.key}`} 
            title={video.name} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen/>
          ))}
        </div>
      </Layout>
    )
  }



export default WithRouter(DetailMovie)
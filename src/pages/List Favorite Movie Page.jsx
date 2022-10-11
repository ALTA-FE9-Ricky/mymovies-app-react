import React,{ useState} from "react";
import 'styles/App.css';
import { useSelector,useDispatch } from "react-redux";
import { setFavorites } from "utils/redux/reducers/reducer";
import Card2 from "components/card2";
import { WithRouter } from "utils/Navigation";
import Layout from "components/Layout";
import { useTitle } from "utils/useTitle";
// import axios from "axios";

function Favorite(){
    const favorites = useSelector((state) => state.data.favorites)
    const dispatch = useDispatch()
    const [titles] = useState("List Your Favorite Movie")
    const [datas,setDatas] = useState([])
    const [loading,setLoading] = useState(true)
    useTitle("List Your Favorite Movie")

    function handleRemoveFav(movie){
        const rem = favorites.filter((e) => e !== movie)
        dispatch(setFavorites(rem))
        localStorage.setItem("favMovie",rem) 
    }
    
    
        return(
            <>
        <Layout>
        <div className="w-full flex flex-col">
            <p className="text-center">{titles}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
            {favorites.map((data) => (
                <Card2
                 key={data.id}
                 image={data.poster_path}
                 title={data.title}
                //  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                 addFavorite={() => handleRemoveFav(favorites)}
                />
            ))}
            </div>
        </div>
        </Layout>
        </>
        )
    }


export default WithRouter(Favorite)
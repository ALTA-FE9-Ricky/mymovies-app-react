import { Component } from "react";
import '../styles/App.css';
import Card from "../components/card";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
// import axios from "axios";

class Favorite extends Component{
    state = {
        title: "List Your Favorite Movie",
        datas: [],
        loading: true
    }

    componentDidMount() {
        this.fetchdata()
    }

    handleRemoveFav(){
        
    }
    
    fetchdata(){
    const getMovies = localStorage.getItem("favMovies")
    if(getMovies){
        const parsedMovies = JSON.parse(getMovies)
        this.setState({datas: parsedMovies, loading: false})
    }
    // this.setState({datas: dataTemp})
    }
    
    render() {
        return(
        <Layout>
        <div className="w-full flex flex-col">
            <p className="text-center">{this.state.title}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
            {this.state.datas.map((data) => (
                <Card
                 key={data.id}
                 image={data.poster_path}
                 title={data.title}
                 onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                 addFavorite={() => this.handleFav(data)}
                />
            ))}
            </div>
        </div>
        </Layout>
        )
    }
}

export default WithRouter(Favorite)
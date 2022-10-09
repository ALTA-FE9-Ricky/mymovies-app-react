import { Component } from "react"
import axios from "axios";
import '../styles/App.css';
import Layout from "../components/Layout"
import { WithRouter } from "../utils/Navigation";

class DetailMovie extends Component{
    state = {
        data: {},
        loading: true
    }

    componentDidMount() {
        this.fetchdata()
    }

    fetchdata(){
      const { id_movie } = this.props.params
      axios
      .get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=976fb07f6e28d0eb75915ad2c1b0836e`)
      .then ((res) =>{
        const { data } = res
        this.setState({data})
      })
      .catch ((err) => {
        alert(err.toString())
      })
      .finally(() => {this.setState({loading: false})})
    }


  render() { 
    return (
      <Layout>
        <div className="flex p-24 content-center flex-col md:flex-row lg:flex-row gap-10">
        <img className="w-80 h-4/12" src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt={this.props.title} />
        <div className="flex flex-col md:flex-col lg:flex-col">
        <h1 className="text-5xl">{this.state.data.title}</h1>
        <br />
        <p className="text-lg">Release Date: {this.state.data.release_date}</p>
        <br />
        <p className="text-lg">Runtime: {this.state.data.runtime} Minutes</p>
        <br />
        <p className="text-lg">Language: {this.state.data.original_language}</p>
        <br />
        <p className="text-lg">Popularity: {this.state.data.popularity}</p>
        <br />
        <p className="text-lg">Budget: {this.state.data.budget} $</p>
        <br />
        <p className="text-lg">Revenue: {this.state.data.revenue} $</p>
        <br />
        <p className="text-lg">Status: {this.state.data.status}</p>
        </div>
        </div>
        <p className="flex flex-col px-16 text-xl"> Overview <br />{this.state.data.overview}</p>
      </Layout>
    )
  }
}


export default WithRouter(DetailMovie)
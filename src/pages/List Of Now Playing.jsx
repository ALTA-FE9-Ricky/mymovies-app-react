import { Component } from "react";
import '../styles/App.css';
import Layout from "../components/Layout";
import axios from "axios";
import Card from "../components/card";
import { ButtonPrimary } from "../components/Button";
class App extends Component{
    state = {
        title: "List Of Now",
        datas: [],
        loading: true,
        page: 1,
    }

    componentDidMount() {
        this.fetchdata()
    }
    
    fetchdata(){
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=976fb07f6e28d0eb75915ad2c1b0836e&page=${this.state.page}`)
    .then((res) =>{
        const { results } =res.data
        const newPage = this.state.page + 1
        const temp = [...this.state.datas]
        temp.push(...results)
        this.setState({datas: temp, page: newPage})
    })
    .catch((err) =>{})
    .finally(() =>{
        this.setState({loading: false})
    })
    }
    
    render() {
        return(
        <Layout>
        <div className="w-full flex flex-col">
            <p className="text-center">{this.state.title} Playing</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
            {this.state.datas.map((data) => (
                <Card
                 key={data.id}
                 image={data.poster_path}
                 title={data.title}
                />
            ))}
            </div>
            <ButtonPrimary label="Load More" onClick={() => this.fetchdata()}/>
        </div>
        </Layout>
        )
    }
}

export default App
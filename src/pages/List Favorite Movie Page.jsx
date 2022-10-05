import { Component } from "react";
import '../styles/App.css';
import Layout from "../components/Layout";
import axios from "axios";

class App extends Component{
    state = {
        title: "List Your Favorite Movie",
        datas: [],
        loading: true
    }

    componentDidMount() {
        this.fetchdata()
    }
    
    fetchdata(){
    // this.setState({datas: dataTemp})
    }
    
    render() {
        return(
        <Layout>
        <div>
            <p className="text-center">{this.state.title}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
            {this.state.datas.map((data) => (
                <div className="flex flex-col justify-center p-4 shadow-xl shadow-fuchsia-500 rounded-lg" key={data.id}>
                    <img src={data.image} alt={data.title}/>
                    <p className="text-center">{data.title}</p>
                </div>
            ))}
            </div>
        </div>
        </Layout>
        )
    }
}

export default App
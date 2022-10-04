import { Component } from "react";
import '../styles/App.css';
import Layout from "../components/Layout";

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
        let dataTemp = []
        for(let i= 0;i<10;i++){
            const temp = {
                id: i +1,
                title: `FILM TITLE ${i+1}`,
                image: "https://genshin.honeyhunterworld.com/img/nilou_070.webp"
            }
            dataTemp.push(temp)
        }
        this.setState({datas: dataTemp})
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
import { Component } from "react"
import '../styles/App.css';
import Layout from "../components/Layout"

class App extends Component{
    state = {
        title: "Detail Movie"
    }

    componentDidMount() {
        this.fetchdata()
    }

    fetchdata(){
        let dataTemp = []
        const temp = {
        image: "https://genshin.honeyhunterworld.com/img/nilou_070.webp"
        }
        dataTemp.push(temp)
    }


  render() { 
    return (
      <Layout>
      <div>
      <p className="text-center">{this.state.title}</p>
      <img src={data.image} alt={data.title}/>
      </div>
      </Layout>
    )
  }
}


export default App
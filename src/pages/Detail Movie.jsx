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
    }


  render() { 
    return (
      <Layout>
      <div>
      
      </div>
      </Layout>
    )
  }
}


export default App
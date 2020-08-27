import './App.css';
import dummy from './img/dummy.png';
import Header from './components/header';
import Row1 from './components/Row1';
import Row2 from './components/Row2';
import Row3 from './components/Row3';
import Articlew7 from './components/Articlew7';
import Articlew5 from './components/Articlew5';
import API_KEY from './config';
import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  state={
    data: []
  }
  componentDidMount(){
    console.log(API_KEY)
    axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
      .then(res => {
        console.log(res.data.articles);
        this.setState({data: res.data.articles});
      })
      .catch(err=> console.log(err))
  }
  renderA7data(){
    var len = this.state.data.length;
    var s = Math.floor(len/2);
    const rdata = this.state.data.slice(0,s);
    console.log(rdata);
    return(
      <Articlew7 rdata={rdata} />
    )
  }
  renderA5data(){
    var len = this.state.data.length;
    var s = Math.floor(len/2);
    const rdata = this.state.data.slice(s,);
    console.log(rdata);
    return(
      <Articlew5 rdata={rdata} />
    )
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        
        <div style={{padding: "20px"}} class="container-fluid">
          <Header/>  
          <br />
          <Row1/>
          <br />
          <div className="row">
            
            {this.renderA7data()}
            {this.renderA5data()}
           
          </div>
          <Row2 />
          <br />
          <Row3 />  
        </div>
      </div>
    )
  }
}

export default App;

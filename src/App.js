import React, {Component}from 'react'
import axios from 'axios'
import styles from './App.module.css'
import Main from './components/Main/Main.js';
import { MapDiv } from './components/MapDiv/MapDiv';


class App extends Component{

  state = {
    ip : "",
    loc : {},
    isp : "",
    as_name : "",
    lat : 18.52,
    long : 73.8
  }

  
  handleChange =(event)=>{
    const {value} = event.target
    this.setState({ip : value})
    
  }

  handleSearch = async()=>{
      const url = `https://geo.ipify.org/api/v1?apiKey=at_PzHVdj7RtKgtUenDZXRvshAFG2XDU&ipAddress=${this.state.ip}`
      let fetchedData = {}

      try {
        await axios.get(url).then(res => fetchedData = res.data)
        this.setState({
          loc : fetchedData.location,
          isp : fetchedData.isp,
          as_name : fetchedData.as.name,
          lat : fetchedData.location.lat,
          long : fetchedData.location.lng
      })
      console.log(`lat : ${this.state.lat} log : ${this.state.long}`)
      } catch (error) {
        alert("Wrong IP address\n" + error)
      }
      
      
   }




  render(){
    
    return (
      <div className = {styles.container}>
        <div className = {styles.topbg}>
          <input 
              type="text" value = {this.state.ip} 
              name="search" placeholder="Search.."
              className= {styles.searchbar}
              onChange = {this.handleChange}
              />
          <button  
          onClick = {this.handleSearch}
          className = {styles.button}> GO </button>
          </div>
          <Main 
          country = {this.state.loc.country} 
          ip = {this.state.ip}
          region = {this.state.loc.region}
          city = {this.state.loc.city}
          tzone = {this.state.loc.timezone}
          asname = {this.state.as_name}
          isp = {this.state.isp}
            />
          <MapDiv/>
          

          
          
            
    


        
      </div>
    );
  }
  
}

export default App;


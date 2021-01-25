import React, {Component}from 'react'
import styles from './Searchbar.module.css'
import Main from '../Main/Main.js'
import axios from 'axios'

class Searchbar extends Component {
    
    state = {
        ip : "",
        loc : {},
        isp : "",
        as_name : ""
        
        
    }
    
    
    handleChange =(event)=>{
        const {value} = event.target
        this.setState({ip : value})
        
    }
    handleSearch = async()=>{
        const url = `https://geo.ipify.org/api/v1?apiKey=at_PzHVdj7RtKgtUenDZXRvshAFG2XDU&ipAddress=${this.state.ip}`
        let fetchedData = {}
        await axios.get(url).then(res => fetchedData = res.data)
        .catch(e => console.log(e))
        
        this.setState({
            loc : fetchedData.location,
            isp : fetchedData.isp,
            as_name : fetchedData.as.name
        })
    }

    render(){
        
        return (
            <div className = {styles.bg}>
                <div className = {styles.searchcontainer}>
                    <input 
                        className = {styles.bar} 
                        type="text" value = {this.state.ip} 
                        name="search" placeholder="Search.."
                        onChange = {this.handleChange}
                        />
                    <button 
                    className = {styles.button} 
                    onClick = {this.handleSearch}> GO </button>
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
            </div>
        )
    }
    
}

export default Searchbar

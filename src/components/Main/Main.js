import React, { Component } from 'react'
import styles from './Main.module.css'
import axios from 'axios'

export class Main extends Component {

    state = {
        ip : "",
    }

    componentDidMount = async () =>{
        axios.get('https://geo.ipify.org/api/v1?apiKey=at_PzHVdj7RtKgtUenDZXRvshAFG2XDU&ipAddress=103.146.240.30')
        .then((respose)=>console.log(respose.data))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className = {styles.box}>
                <div className = {styles.ip}>IP ADDRESS</div>
                <div className = {styles.loc}>LOCATION</div>
                <div className = {styles.tzone}>TIME ZONE</div>
                <div className = {styles.isp}>ISP</div>
            </div>
        )
    }
}

export default Main

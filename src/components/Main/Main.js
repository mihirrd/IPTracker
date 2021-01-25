import React from 'react'
import styles from './Main.module.css'


function Main(props) {

    return (
        <div className = {styles.box}>
            <div className = {styles.ip}>
                <h4>IP ADDRESS</h4>
                <h2>{props.ip === "" ? "---" : props.ip}</h2>
            </div>
            <div className = {styles.loc}>
                <h4 className = {styles.location}>LOCATION</h4>
                <p className = {styles.city}>{props.city}</p>
                <p className = {styles.region}>{props.region}</p>
                <p className = {styles.country}>{props.country}</p>    
            </div>
            <div className = {styles.tzone}>
                <h4>TIME ZONE</h4>
                <h1>{props.tzone}</h1>
                
            </div>
            <div className = {styles.isp}>
                <h4>ISP</h4>
                <h1>{props.isp}</h1>
                
            </div>
        </div>
    )
}

export default Main

import React from 'react'
import styles from './Main.module.css'


function Main(props) {

    return (
        <div className = {styles.box}>
            <div className = {styles.ip}>
                <p className = {styles.heading}>IP ADDRESS</p>
                <p>{props.ip === "" ? "---" : props.ip}</p>
            </div>
            <div className = {styles.loc}>
                <p className = {styles.heading}>LOCATION</p>
                <p className = {styles.city}>{props.city}</p>
                <p className = {styles.region}>{props.region} {props.country}</p>
                  
            </div>
            <div className = {styles.tzone}>
                <p className = {styles.heading}>TIME ZONE</p>
                <p>{props.tzone}</p>
                
            </div>
            <div className = {styles.isp}>
                <p className = {styles.heading}>ISP</p>
                <p className = {styles.ispname}>{props.isp}</p>
                <p className = {styles.asname}>{props.asname}</p>
            </div>
        </div> 
    )
}

export default Main

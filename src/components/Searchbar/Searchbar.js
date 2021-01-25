import React from 'react'
import styles from './Searchbar.module.css'
import Main from '../Main/Main.js'

function Searchbar() {

    
    return (
        <div className = {styles.bg}>
            <div className = {styles.searchcontainer}>
                <input className = {styles.bar} type="text" name="search" placeholder="Search.."/>
                <button className = {styles.button}> > </button>
            </div>
            <Main/>
        </div>
    )
}

export default Searchbar

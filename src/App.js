import React from 'react'
import Searchbar from './components/Searchbar/Searchbar.js'
import Map from './components/Map/Map.js'
import styles from './App.module.css'
//import Main from './components/Main/Main.js';

function App() {
  return (
    <div className = {styles.container}>
      <Searchbar/>
      <Map/>
    </div>
  );
}

export default App;

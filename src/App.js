import React, { Component } from 'react';
import './App.css';
import ImageList from './components/imagelist';
import Navbar from './components/navbar';



class App extends Component {  
  render() {
    return (
      <>
      <Navbar></Navbar>
      <div className="main-container">
        
        <ImageList></ImageList>
       
      </div>
      </>
    );
  }
}

export default App;
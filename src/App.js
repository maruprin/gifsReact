import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfgifs'
import {Link, Route} from "wouter"


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Pandas</Link>
        <Link to='/gif/stitch'>Stitch</Link>
        <Link to='/gif/argentina'>Argentina</Link>
        
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}



import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div className="App">
      <Home />
      <MovieList />
    </div>
  );
}

export default App;

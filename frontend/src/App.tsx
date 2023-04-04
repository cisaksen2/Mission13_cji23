import React from 'react';
import './App.css';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieListv2 from './pages/MovieListv2';

function App() {
  return (
    <div className="App">
      <Home />
      <MovieList />
      <MovieListv2 />
    </div>
  );
}

export default App;

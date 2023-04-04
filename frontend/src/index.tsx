import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Baconsale from './pages/Baconsale';
import MovieList from './pages/MovieList';
import MovieListv2 from './pages/MovieListv2';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="baconsale" element={<Baconsale />} />
          <Route path="movielist" element={<MovieList />} />
          <Route path="movielistv2" element={<MovieListv2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieListv2() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  // Filter the movieData array to only include edited movies
  const editedMovies = movieData.filter((m) => m.edited === 'Yes');

  // Sort the editedMovies array alphabetically by title
  editedMovies.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="container text-center">
        <h4>Edited Movies in Joel's Database</h4>
      </div>
      <div className="container text-center">
        <table className="table table-border">
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {editedMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.movieId}</td>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieListv2;

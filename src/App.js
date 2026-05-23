import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5250/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Kunde inte hämta filmer.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Hv's Biograf</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.genre}</p>
              <p>{movie.durationMinutes} min</p>
              <p>{movie.isShowing ? 'Nu på bio' : 'Kommer snart'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
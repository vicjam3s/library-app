const movies = [
  { id: 1, name: "Inception", rating: 9 },
  { id: 2, name: "Avatar", rating: 7 },
  { id: 3, name: "Interstellar", rating: 8 },
];

const MovieList = () => {
  const topMovies = movies.filter(movie => movie.rating >= 8);

  return (
    <div className="section">
      <h3>Movies</h3>

      {topMovies.map(movie => (
        <div key={movie.id} className="card">
          {movie.name} ({movie.rating})
        </div>
      ))}
    </div>
  );
};

export default MovieList;


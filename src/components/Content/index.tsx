import { useGenres } from '../../hooks/useGenres';
import { Header } from '../Header';
import { MovieCard } from '../MovieCard';
import { Container, Main, MovieList } from './styles';

export function Content() {
  const { genres, selectedGenreId } = useGenres();
  console.log(selectedGenreId)
  console.log(genres)
  let movies = [];
  return (
    <Container>
      <Header selectedGenreTitle={genres.length > 0 ? genres[selectedGenreId-1].title : 'Loading'} />

      <Main>
        <MovieList>
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </MovieList>
      </Main>
    </Container>
  ) 
}
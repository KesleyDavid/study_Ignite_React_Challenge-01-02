import { useEffect, useState } from 'react';

import { api } from './services/api';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { MovieCard } from './components/MovieCard';
import { SideBar } from './components/SideBar';

// import { Content } from './components/Content';

import { GlobalStyle } from "./styles/global";
import './styles/sidebar.scss';
import './styles/content.scss';
import { GenresProvider } from './hooks/useGenres';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  // useEffect(() => {
  //   api.get<GenreResponseProps[]>('genres').then(response => {
  //     setGenres(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
  //     setMovies(response.data);
  //   });

  //   api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
  //     setSelectedGenre(response.data);
  //   })
  // }, [selectedGenreId]);

  // function handleClickButton(id: number) {
  //   setSelectedGenreId(id);
  // }
  
  return (
    <GenresProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div className="container">
          <Header selectedGenreTitle={selectedGenre.title} />

          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
        </div>
      </div>
      <GlobalStyle />
    </GenresProvider>
  )
}
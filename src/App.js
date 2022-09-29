import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import { useState } from 'react'

function App() {
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState('TMDB.films') 

  return (
    <div className="film-library">
      <FilmList 
        films={TMDB.films}
        film={films}

        />

      <Details 
      films={TMDB.films}
      film={current}
      />

    </div>
  )
}

export default App; 
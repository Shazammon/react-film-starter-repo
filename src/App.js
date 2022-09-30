import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import { useEffect, useState } from 'react'

function App() {
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState([]) 
  const api_key = process.env.REACT_APP_TMDB_API_KEY

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;


  useEffect(() => {
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)

    })
  }, [])

  

  const handleDetailsClick = (film) => {
    console.log('fetching details for film: ', film.title)
    setCurrent(film)
}

  return (
    <div className="film-library">
      <FilmList 
        films={films}
        film={films}
        handleDetailsClick={handleDetailsClick}

        />

      <Details 
      films={films}
      film={current}
      />

    </div>
  )
}

export default App; 
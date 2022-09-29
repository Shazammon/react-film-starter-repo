
import FilmRow from './FilmRow'
import { useState } from 'react'

 function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])
    


    const handleFilterClick = (e, filter) => {
        setFilter(filter)
    }

    const handleFaveToggle = (film) => {
        let newFaves = faves.slice()
        // could also do "let newFaves = [...faves]"
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex === -1) {
           newFaves.push(film) 
           console.log(`Adding ${film} to faves`)
        } else {
            newFaves.splice(filmIndex, 1)
            console.log(`Removing ${film} from faves`)
        }
        setFaves(newFaves)
    }

    // handleFilterClick = (e, filter) => {
    //     this.setState(
    //         {filter}
    //     )
    // }


        const allFilms = props.films.map((film, i) => {
            return (
                <FilmRow 
                    key={`filmrow${i}`}
                    film={film}
                    onFaveToggle={handleFaveToggle}
                    isFave={faves.includes(film)}
                />
            )
        })
        // console.log(allFilms)
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={ (e) => {handleFilterClick(e, 'all')}}>
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={ (e) => {handleFilterClick(e, 'faves')}}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>

                </div>
                {allFilms}
        </div>
        )
}

export default FilmList;
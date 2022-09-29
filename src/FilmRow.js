import Poster from './Poster'
import Fave from './Fave'

function FilmRow(props) {

    const handleDetailsClick = (film) => {
        console.log('fetching details for film: ', film.title)
    }

        return (
            <div className='film-row'
                onClick={() => handleDetailsClick(props.film)}
            >
                <Poster 
                    poster_path={props.film.poster_path}
                    title={props.film.title}
                />

                <div className='film-summary'>
                    
                    <h1>{props.film.title}</h1>

                    <p>{props.film.release_date.split('-')[0]}</p>

                </div>
                <Fave 
                    onFaveToggle={() => {props.onFaveToggle(props.film)}}
                    isFave={props.isFave}
                />
            </div>
        )
}


export default FilmRow;
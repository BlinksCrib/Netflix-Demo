import { useContext, useEffect } from 'react'
import { MovieContext } from '../MovieContext'
import Items from './Items'

// ae13f51438c19c3a102abf8f7a2c6cf2
const url = 'https://api.themoviedb.org/3/'
const key = 'movie?api_key=ae13f51438c19c3a102abf8f7a2c6cf2&query='
const List = () => {
  const { movie, setMovie, searchKey, setSelected } =
    useContext(MovieContext)

  useEffect(() => {
    const filmMovie = async () => {
      const type = searchKey ? 'search' : 'discover'
      const response = await fetch(`${url}${type}/${key}${searchKey}`)
      const data = await response.json()
      console.log(data.results)
      setMovie(data.results)
      setSelected(data.results[0])
    }
    filmMovie()
  }, [searchKey, setMovie, setSelected])

  return (
    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      {movie.map(
        ({ poster_path, title, vote_average, release_date }, index) => (
          <Items key={index++} poster_path={poster_path} title={title} vote_average={vote_average} release_date={release_date} />
        )
      )}
    </div>
  )
}

export default List

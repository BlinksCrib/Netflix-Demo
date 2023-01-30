import { useContext } from "react"
import { MovieContext } from '../MovieContext'


const imgPath = 'https://image.tmdb.org/t/p/w500/'


const Banner = () => {
  const { selected } = useContext(MovieContext)
  return (
    <div
      style={{
        backgroundImage: `url(${imgPath}${selected.backdrop_path})`,
        width: '100%',
        height: '60vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center', color: 'green' }}>
          {selected.title}
        </h1>
        <p style={{ textAlign: 'center', color: 'white' }}>
          {selected.overview}
        </p>
      </div>
    </div>
  )
}

export default Banner

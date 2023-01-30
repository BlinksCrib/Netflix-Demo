const imgPath = 'https://image.tmdb.org/t/p/w500/'
const unavailable =
  'https://thumbs.dreamstime.com/z/unavailable-text-concept-human-hand-over-wooden-background-89839252.jpg'
const Items = ({ poster_path, title, vote_average, release_date }) => {
  return (
    <div
      style={{
        width: '200px',
        margin: '15px',
        padding: '10px',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <img
        src={poster_path ? `${imgPath}${poster_path}` : unavailable}
        alt=''
        width={'200'}
        style={{ borderRadius: '20px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: "column" }}>
        <span style={{color: "red"}}>{title}</span>
        <span
          style={{
            border: '2px solid green',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            padding: '10px',
            textAlign: "center",
          }}
        >
          {vote_average.toFixed()}
        </span>
        <div style={{backgroundColor: "grey", borderRadius: "20px", textAlign: "center", fontWeight: "700" , marginTop: "20px"}}>
          <p>{release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default Items

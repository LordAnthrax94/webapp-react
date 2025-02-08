import { Link } from "react-router-dom"

const Card = ({movieData}) =>{

  const { id, title, image} = movieData
  return (
    
          // <div className="card">
          //   <h1>{movie.name}</h1>
          //   <img src={movie.image} alt={movie.name} />
          //     <Link to={`/movies/${movies.id}`} className="btn btn-success">Vedi dettagli</Link>
          // </div>
          
          
          <div className="card" >
            <img src={movie.image} className="card-img-top" alt={movie.name} />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`/movies/${movies.id}`} className="btn btn-success">Vedi dettagli</Link>
            </div>
          </div>
   
  )
}

export default Card
import { Link } from "react-router-dom"

const Card = () =>{
  return (
    
          <div className="card">
            <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name} />
              <Link to={`/movies/${movies.id}`} className="btn btn-success">Vedi dettagli</Link>
          </div>     
   
  )
}

export default Card
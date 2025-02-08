import { Link } from "react-router-dom"
import Rating from "../Components/Rating"

const Card = ({movie}) =>{

  
  return (    
          <div className="card movies-card"> 
          <p>{movie.image}</p>           
            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p>{movie.genre}</p>
              <p>{movie.abstract}</p>
                <p>{movie.vote}</p>
              {/* {movie.vote && <Rating vote={movie.vote} />}                      */}
              <Link to={`/movies/${movie.id}`} className="btn btn-success">Vedi dettagli</Link>
            </div>
          </div>   
  )
}

export default Card
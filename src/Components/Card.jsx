import { Link } from "react-router-dom"

const Card = ({movie}) =>{

  
  return (    
          <div className="card movies-card" > 
          <p>{movie.image}</p>           
            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p>{movie.genre}</p>                          
              <Link to={`/movies/${movie.id}`} className="btn btn-success">Vedi dettagli</Link>
            </div>
          </div>   
  )
}

export default Card
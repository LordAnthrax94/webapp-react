import { useGlobalContext } from "../context/GlobalContext"
import Card from "../Components/Card"
import { useEffect } from "react"

import { Link } from "react-router-dom"

const HomePage = () =>{

const { movies, fetchMovies} = useGlobalContext()

useEffect(fetchMovies, [])

  return (
    <div>
      <div className="container">
        <h1>Lista Film</h1>
          {Array.isArray(movies) && movies.length > 0 ? (movies.map((movie) =>{ 
            <div className="col-12-md-4" key={movie.id}>
               <div className="card" >
                  <img src={movie.image} className="card-img-top" alt={movie.name} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/movies/${movies.id}`} className="btn btn-success">Vedi dettagli</Link>
                  </div>
                </div>
            </div>
      })):(<p>Nessun film disponibile</p>)}
        
        </div>
    </div>
   
  )
}

export default HomePage
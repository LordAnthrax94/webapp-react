import { useGlobalContext } from "../context/GlobalContext"
import Card from "../Components/Card"
import { useEffect } from "react"

const HomePage = () =>{

const { movies, fetchMovies} = useGlobalContext()

useEffect(fetchMovies, [])

  return (
    <div>
      <div className="container mt-3">        
        <h1>Lista Film</h1>
        <div className="d-flex flex-wrap">
            {Array.isArray(movies) && movies.length > 0 ? (movies.map((movie) => (
              <div className="col-md-4 m-2" key={movie.id}>
                <Card movie={movie} />
              </div>)
            )):(<p>Nessun film disponibile</p>)}
        </div>
      </div>
    </div>
   
  )
}

export default HomePage
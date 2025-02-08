import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"


const PageDetail = () =>{

  const { id } = useParams();
  const { movie, fetchMovie } = useGlobalContext();

  useEffect(() => fetchMovie(id), [])
console.log(movie);

  return (
    <div>
      <h1>Dettagli del Film = {movie?.title}</h1>      
      
    </div>
  )
}

export default PageDetail 
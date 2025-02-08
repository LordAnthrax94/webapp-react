import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

const PageDetail = () =>{

  const { id } = useParams();
  const { movie, fetchMovie} = useGlobalContext();

  useEffect(() => fetchMovie(id), [])
  return (
    <div>
      DETTAGLI DEL FILM = {id}
    </div>
  )
}

export default PageDetail 
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"


const HomePage = () =>{

const {fetchMovies, movies} = useGlobalContext()

useEffect(fetchMovies, [])

  return (
    <div>
      <div className="container">
        <h1>Lista Film</h1>
        <div className="card"></div>
      </div>
      
    </div>
  )
}

export default HomePage
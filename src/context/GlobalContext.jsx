import axios from "axios";
import { createContext, useState, useContext } from "react";


const GlobalContext = createContext();

const GlobalProvider = ({children}) =>{

const api_url = import.meta.env.VITE_API_URL

const [movies, setMovies] = useState([])
const [movie, setMovie] = useState({})

const fetchMovies = () =>{
  axios.get(api_url)
  .then(res =>{
    setMovies(res.data) 
    
         
  })
  .catch(err => console.log(err))
}

const fetchMovie = (id) =>{
  axios.get(`${api_url}/${id}`)
  .then(res =>{
    setMovie(res.data)
    
    
  })
  .catch(err => console.log(err))
}

const value = {
  movies,
  fetchMovies,
  movie,
  fetchMovie
  
}
  return(
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export{
  GlobalProvider,
  useGlobalContext
}
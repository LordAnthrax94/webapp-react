import { useState } from "react"
import axios from "axios"
import { useGlobalContext } from "../context/GlobalContext"




const FormReview = ({ movie_id }) =>{

const { fetchMovie } = useGlobalContext()

const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`

  const initialFormData = {    
    name: "",
    text:"",
    vote:""    
  }

  const [formData, setFormData]= useState(initialFormData);
  const [errorMsg, setErrorMsg]= useState('')

  const validateReview = () =>{
    if (!formData.name || !formData.text) return false
    if(isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false

    return true
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!validateReview()){
      setErrorMsg('Attenzione utilizzo di dati non validi')
      return
    }

    axios.post(api_url, formData, {headers: {'content-Type': 'application/json'}})
      .then(res =>{
        console.log(formData);
        
        console.log(res.data);
        setFormData(initialFormData)
        setErrorMsg('')
        fetchMovie(movie_id) 
        console.log(fetchMovie);
                       
      })
      .catch(err => {
        console.log(formData);
        console.log(err);
        
      })
  }

  const setMovieValue = (e) =>{
    const {name, value} = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  return (
    <div>
      <div>
        <h1>Aggiungi la tua recensione</h1>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <p className="text-danger">{errorMsg}</p>
          <div className="card">
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
              <input type="text" name="name" value={formData.name} onChange={setMovieValue} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group">
              <span className="input-group-text">Scrivi la tua recensione</span>
              <textarea type="text" name="text" value={formData.text} onChange={setMovieValue} className="form-control" aria-label="With textarea"></textarea>
            </div>

            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Voto</span>
              <input type="number" name="vote" value={formData.vote} onChange={setMovieValue} min={1} max={5} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div>
              <button className="btn btn-primary m-3" type="submit">Aggiungi recensione</button>
            </div>
          </div>          
      </form>      
    </div>
  )
}

export default FormReview
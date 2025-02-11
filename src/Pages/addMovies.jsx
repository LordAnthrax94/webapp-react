import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const AddMovie = () =>{

  const api_url = import.meta.env.VITE_API_URL 

  const initialData = {
    title: '',
    genre: '',
    abstract: '',
    image: null
  }

  const [formData, setFormData] = useState(initialData)
  const [errorMsg, setErrorMsg] = useState('')

  const handleValue =(e) =>{
    const {value, name} = e.target;
    if( name === 'image'){
      setFormData(prev => ({...prev, image: e.target.files[0] }))
    }else{
      setFormData((prev) =>({...prev, [name]: value}))
    } 
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const dataToSend = new FormData();

    for(let key in formData){
      dataToSend.append(key, formData[key])
    }

    axios.post(api_url, dataToSend, {headers: {'content-Type': 'multipart/formData'}})
    .then(res => {
      console.log(res.data);
      setFormData(initialData)
      setErrorMsg('')      
    })
    .catch(err =>{
      console.log(err);
      setErrorMsg('Errore invio dei dati')
      
    })
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
              <input type="text" name="name" value={formData.name} onChange={handleValue} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group">
              <span className="input-group-text">Scrivi la tua recensione</span>
              <textarea type="text" name="text" value={formData.text} onChange={handleValue} className="form-control" aria-label="With textarea"></textarea>
            </div>

            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Voto</span>
              <input type="number" name="vote" value={formData.vote} onChange={handleValue} min={1} max={5} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="mb-3">
              <label for="formFile" className="form-label">Default file input example</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Aggiungi Film</button>
          </div>
      </form>
      <div>
        <Link to={'/'} className="btn btn-warning mt-5">Torna alla home</Link>
      </div>       
    </div> 
  )
}


export default AddMovie
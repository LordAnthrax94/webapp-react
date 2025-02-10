import { useState } from "react"



const FormReview = () =>{

  const initialFormData = {    
    name: "",
    text:"",
    vote:""    
  }

  const [formData, setFormData]= useState(initialFormData);
  
  
  
  return (
    <div>
      <div>
        <h1>Aggiungi la tua recensione</h1>
      </div>
      <form action="#">
          <div className="card">
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
              <input type="text" name="name" value={formData.name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group">
              <span className="input-group-text">Scrivi la tua recensione</span>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>

            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Voto</span>
              <input type="number" name="vote" value={formData.vote} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
          </div>
      </form>
      
    </div>
  )
}

export default FormReview
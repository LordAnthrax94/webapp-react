import { useState } from "react";


const AddMovie = () =>{

  const initialData = {
    title: '',
    genre: '',
    abstract: '',
    image: null
  }

  const [formData, setDormData] = useState(initialData)

  const handleValue =(e) =>{
    const {value, name} = e.target;

    
  }

  return (
    <>

    </>
  )
}


export default AddMovie
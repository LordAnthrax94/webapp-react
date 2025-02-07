import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"


const HomePage = () =>{

const {fetchBooks} = useGlobalContext()

  return (
    <div>
      Home
    </div>
  )
}

export default HomePage
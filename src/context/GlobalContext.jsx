import { createContext, useState, useContext } from "react";
import { Axios } from "axios";


const GlobalContext = createContext();

const GlobalProvider = ({children}) =>{

const api_url = import.meta.env.VITE_API_URL
 const value = {}


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
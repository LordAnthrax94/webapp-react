import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const DefaultLayout = () =>{
  return (
    <>
      <Header />

      <main className="container">
        <Outlet />
      </main>

      

    </>
  )
}

export default DefaultLayout
import HomePage from "./Pages/HomePage"
import PageDetail from "./Pages/PageDetail"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"



function App() {
 

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies/:id' element={<PageDetail />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </GlobalProvider>
    
  )
}

export default App

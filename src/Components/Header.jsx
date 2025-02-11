import { Link } from "react-router-dom"

const Header = () =>{
  return (
    <header className="text-bg-secondary">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center">
        <div>
         <Link to={'/'} className="btn"><h2>BoolMovies</h2></Link>
        </div>
        <div>
          <Link to={'/movies/add'} className="btn btn-outline-warning"> Aggiungi un film</Link>
        </div>
        
          
        </div>
      </nav>
    </header>
  )
}

export default Header
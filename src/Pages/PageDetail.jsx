import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import FormReview from "../Components/formReview"
import Rating from "../Components/Rating"
import ReviewCard from "../Components/ReviewCard"

const PageDetail = () =>{

  const { id } = useParams();   
  
  
  const { movie, fetchMovie, eliminateMovie } = useGlobalContext();

  const reviewList = () =>{    
    return movie?.reviews.map(item => <ReviewCard key={item.id} review={item} />) 
  }

 
  
  

  useEffect(() => fetchMovie(id), [])

  return (
    <div className="col-12">      
      <div className="card mt-3 d-flex flex-wrap">
        <div className="locandina">
          <img src={movie?.image} className="card-img-top" alt={movie?.title}/>
        </div>        
        <div className="descrizione card-body">
          <h1>{movie?.title}</h1> 
          <p>{movie?.genre}</p>
          <p className="card-text">{movie?.abstract}</p>
          <p>{movie?.vote && <Rating vote={movie.vote} />}</p>
          <p>{movie?.vote}</p> 
        </div>

        <div>
          <button className="btn btn-danger" onClick={() => {
            if(confirm('Sei sicuro di voler elimnare il film?'))
              eliminateMovie(movie?.id)             
          }}>ELIMINA FILM</button>  
        </div> 
                    
      </div>
        <div>
            <section>
              {reviewList()}              
            </section>
            <section>
              <FormReview movie_id={movie?.id} />
            </section>
            
        </div> 
        <div>
          <Link to={'/'} className="btn btn-warning mt-5">Torna alla home</Link>
        </div>  
      
    </div>

    
  )
}

export default PageDetail 
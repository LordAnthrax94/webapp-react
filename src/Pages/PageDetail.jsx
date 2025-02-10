import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import FormReview from "../Components/formReview"
import Rating from "../Components/Rating"
import ReviewCard from "../Components/ReviewCard"



const PageDetail = () =>{

  const { id } = useParams();
  console.log(id);
  
  console.log(useParams());
  
  const { movie, fetchMovie } = useGlobalContext();

  const reviewList = () =>{
    return movie.review.map(item => <ReviewCard key={item.id} review={item} />)
  }

  useEffect(() => fetchMovie(id), [])
console.log(movie);

  return (
    <div className="col-12">      
      <div className="card d-flex flex-wrap">
        <div className="locandina">
          <img src={movie?.image} className="card-img-top" alt={movie?.title}/>
        </div>        
        <div className="card-body">
          <h1>{movie?.title}</h1> 
          <p className="card-text">{movie?.abstract}</p>
          <p>{movie?.vote && <Rating vote={movie} />}</p>
          <p>{movie?.vote}</p> 
        </div>               
      </div>
        <div>
            <section>
              {movie?.reviews && reviewList()}
            </section>
            <section>
              <FormReview />
            </section>
        </div> 
        <div>
          <Link to={'/'} className="btn btn-warning mt-5">Torna alla home</Link>
        </div>  
      
    </div>

    
  )
}

export default PageDetail 
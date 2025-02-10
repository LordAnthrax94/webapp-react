import Rating from "./Rating"

const ReviewCard = (review) =>{
  return (  
    
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{review.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{review.vote}</h6>
          <p className="card-text">{review.text}</p> 
          <Rating vote={review.vote} />         
        </div>
      </div>
    

  )
}

export default ReviewCard
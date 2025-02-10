
const ReviewCard = (review) =>{




  return (  
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{review.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{review.vote}</h6>
          <p className="card-text">{review.text}</p>          
        </div>
      </div>

    </div>

  )
}

export default ReviewCard
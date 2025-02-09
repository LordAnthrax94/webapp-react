import PropTypes from "prop-types"

const Rating = ({ vote }) =>{

  const starStamp = () => {
    console.log(vote);
    
    const stars = []
    for(let i = 0; i < 5; i++){
      stars.push(<i className={`bi bi-star${i < vote ? '-fill' : ''}`}></i>)
    }
    return stars;
    }
  
  return (
    <span className="text-warning">{starStamp()}</span>
  )

}

Rating.PropTypes = {
  vote: PropTypes.number.isRequired
}

export default Rating
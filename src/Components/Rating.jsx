import PropTypes from "prop-types"

const Rating = ({vote}) =>{

  const starStamp = () => {
  
    return [1, 2, 3, 4, 5].map((_, i) => (<i key={i} className={`bi bi-star${i < vote ? '-fill' : ''}`}></i>));
  }

  return (
    <span className="text-warning">{starStamp()}</span>
  )

}

Rating.PropTypes = {
  vote: PropTypes.number.isRequired
}

export default Rating
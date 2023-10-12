// Write your code here
import './index.css'

const CommentItems = props => {
  const {listOfComments, deletedMethod, isActived} = props
  const {
    name,
    comment,
    timeDistance,
    initialClassName,
    id,
    isLiked,
  } = listOfComments
  const newOne = timeDistance
  const letter = name.slice(0, 1)

  const likeMethod = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isActive = () => {
    isActived(id)
  }

  const deleteMethod = () => {
    deletedMethod(id)
  }

  return (
    <li className="list-item">
      <div className="heading-container">
        <p className={initialClassName}>{letter}</p>
        <div>
          <div className="name-containers">
            <p className="name">{name}</p>
            <p className="time">{newOne}</p>
          </div>
          <p className="comments">{comment} </p>
        </div>
      </div>
      <div className="like-container">
        <button type="button" className="like-icon" onClick={isActive}>
          <img className="image" src={likeMethod} alt="like" />
          <p className="like">Like</p>
        </button>
        <button
          type="button"
          className="delete"
          onClick={deleteMethod}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItems

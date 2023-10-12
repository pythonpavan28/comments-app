import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItems from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundClassNames =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      initialClassName: initialBackgroundClassNames,
      isLiked: false,
      timeDistance: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  isActived = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deletedMethod = eachId => {
    const {commentList} = this.state
    const filteredList = commentList.filter(eachItem => eachItem.id !== eachId)
    return filteredList
  }

  render() {
    const {name, comment} = this.state
    const filteredList = this.deletedMethod()
    const lengthOfList = filteredList.length
    return (
      <div className="container">
        <div className="bg-container">
          <form className="comments-container" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="sub-heading">Say something about 4.0 Technologies</p>
            <input
              value={name}
              className="name-input"
              onChange={this.onChangeName}
              type="text"
              placeholder="Your Name"
            />
            <br />
            <textarea
              value={comment}
              className="comment-input"
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            />
            <br />
            <button type="submit" className="button">
              Add Comments
            </button>
          </form>
          <div className="image-container">
            <img
              className="comment-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="seperator" />
        <div className="count-container">
          <p className="count">{lengthOfList}</p>
          <p>Comments</p>
        </div>
        <ul>
          {filteredList.map(eachItem => (
            <CommentItems
              key={eachItem.id}
              isActived={this.isActived}
              deletedMethod={this.deletedMethod}
              listOfComments={eachItem}
              backgroundColors={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

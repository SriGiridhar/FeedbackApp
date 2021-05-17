// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {emoteClicked: false}

  imageClick = () => {
    this.setState({emoteClicked: true})
  }

  emojiReturn = eachEmoji => {
    const {name, imageUrl} = eachEmoji
    return (
      <div className="eachEmote">
        <button type="button" className="button" onClick={this.imageClick}>
          <img className="image" src={imageUrl} alt={name} />
        </button>
        <p className="name">{name}</p>
      </div>
    )
  }

  render() {
    const {feedbackData} = this.props
    const {emojis, loveEmojiUrl} = feedbackData
    const {emoteClicked} = this.state
    let emotes
    if (emoteClicked === false) {
      emotes = (
        <div className="emoteContainer">
          <div className="feedback-question-container">
            <h1 className="feedback-title">
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emotes">
              {emojis.map(eachEmoji => this.emojiReturn(eachEmoji))}
            </div>
          </div>
        </div>
      )
    } else {
      emotes = (
        <div className="emoteContainer">
          <img className="loveImage" src={loveEmojiUrl} alt="loveEmoji" />
          <h1 className="heading"> Thank You!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }
    return <div className="bg-container">{emotes}</div>
  }
}
export default Feedback

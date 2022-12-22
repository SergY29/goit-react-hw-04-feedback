import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // countTotalFeedback = () => {
  //   let sum = 0;
  //   console.log(this.state);
  //   for (let value of Object.values(this.state)) {
  //     sum += value;
  //   }

  //   return sum;
  // };

  render() {
    const feedbacks = Object.keys(this.state);
    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          {feedbacks.map(feedback => (
            <button
              name={feedback}
              onClick={this.handleClickFeedback}
              type="button"
              key={feedback}
            >
              {feedback}
            </button>
          ))}
        </div>
        <div>
          <h2>Statistics</h2>
          {feedbacks.map(feedback => (
            <p key={feedback}>
              {feedback}:<span>{this.state[feedback]}</span>
            </p>
          ))}
        </div>
      </>
    );
  }
}

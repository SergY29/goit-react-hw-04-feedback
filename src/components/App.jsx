import { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    return sum;
  };

  countPositiveFeedbackPercentage = arr => {
    let sum = this.countTotalFeedback(arr);
    let positive = arr[0];
    let percentage = 0;
    if (positive > 0) {
      percentage = (positive * 100) / sum;
    }
    return Math.round(percentage);
  };

  render() {
    const allFeedbacks = Object.values(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(allFeedbacks);
    const positivePercentage =
      this.countPositiveFeedbackPercentage(allFeedbacks);
    const btnFeedbacks = Object.keys(this.state);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={btnFeedbacks}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

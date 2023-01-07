import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = ['good', 'neutral', 'bad'];
  let total = good + neutral + bad;

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countPercentage = (total, rate) => {
    let percentage = (rate * 100) / total;
    return Math.round(percentage);
  };
  const positivePercentage = countPercentage(total, good);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={buttons} onLeaveFeedback={onLeaveFeedback} />
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
};

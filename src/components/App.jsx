import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { StyledApp } from './App.styled';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  function handleOption(value) {
    switch (value) {
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
  }

  function countTotalFeedback() {
    return options.bad + options.neutral + options.good;
  }
  function countPositiveFeedbackPercentage() {
    let total = countTotalFeedback();

    return Math.round((100 / total) * options.good);
  }
  console.log(countTotalFeedback());
  return (
    <StyledApp>
      <FeedbackWidget
        options={options}
        onLeaveFeedback={handleOption}
        countTotalFeedback={countTotalFeedback()}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
      ></FeedbackWidget>
    </StyledApp>
  );
}

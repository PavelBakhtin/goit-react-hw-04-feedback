import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { NotificationMessage } from './Notification';
import { Statistics } from './Statistics';
export const FeedbackWidget = ({
  options,
  onLeaveFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback === 0 ? (
          <NotificationMessage message={'There is no feedback'} />
        ) : (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

FeedbackWidget.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.number,
};

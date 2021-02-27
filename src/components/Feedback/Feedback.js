import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import './Feedback.css';
import PropTypes from 'prop-types';

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
    </>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;

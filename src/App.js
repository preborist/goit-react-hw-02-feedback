import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statictics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const name = e.target.name;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentageFeedback = () => {
    if (this.state.good) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={this.handleClick} />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositivePercentageFeedback()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;

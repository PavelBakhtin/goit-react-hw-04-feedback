import { FeedbackWidget } from "./FeedbackWidget/FeedbackWidget";
import { StyledApp } from "./App.styled";
import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
}
  handleOption = () => (value) => {
      this.setState((prevState) => (
            {
                [value]: prevState[value] + 1,
            }))
    }

countTotalFeedback() {
    return this.state.bad + this.state.neutral + this.state.good
    
}
countPositiveFeedbackPercentage() {
  let total = this.countTotalFeedback()
  
  return Math.round(100 / total * this.state.good)
}
  render() {
    return (
      <StyledApp>
        <FeedbackWidget 
          options = {this.state} 
          onLeaveFeedback = {this.handleOption()}
          countTotalFeedback = {this.countTotalFeedback()}
          countPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage()}
         >
        </FeedbackWidget>
      </StyledApp>
    );
  }
};

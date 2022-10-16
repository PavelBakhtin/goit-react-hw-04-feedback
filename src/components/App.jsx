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
     switch (value) {
        case 'good' :
            this.setState((prevState) => (
            {
                good: prevState.good + 1,
            }))
        break;
        case 'neutral':         
            this.setState((prevState) => (
            {
                neutral: prevState.neutral + 1,
            }))
        break;
        case 'bad': 
            this.setState(prevState => (
            {
                bad: prevState.bad + 1,
                
            }))
        break;
        }
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

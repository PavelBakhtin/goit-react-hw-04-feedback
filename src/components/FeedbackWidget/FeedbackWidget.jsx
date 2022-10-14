import  React  from "react";

export class FeedbackWidget extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleBad = () => {
        this.setState(prevState => (
           {
                bad: prevState.bad +1,
            }
        ))
    }
     handleNeutral = () => {
        this.setState(prevState => (
            {
                neutral: prevState.neutral + 1,
            }
        ))
    }
    handleGood = () => {
        this.setState(prevState => (
            {
                good: prevState.good + 1,
                
            }
        ))
    }
   
    countTotalFeedback() {
        return this.state.bad + this.state.neutral + this.state.good
        
    }
    countPositiveFeedbackPercentage() {
      return Math.round(100 / this.countTotalFeedback() * this.state.good)+'%'
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button type="button" onClick={this.handleGood}>Good</button>
                    <button type="button" onClick={this.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleBad}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    {this.countTotalFeedback() === 0 ? <span>There is no feedback</span> : <><p>Good: { this.state.good }</p>
                    <p>Neutral: { this.state.neutral }</p>
                    <p>Bad: { this.state.bad }</p>
                    <p>Total: { this.countTotalFeedback()}</p>
                    <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p></>}
                </div>                
            </div>
      )
    }


}
     
import React from "react";
import PropTypes from 'prop-types'; 
import { StyledOptionsDiv, StyledOptionsButton } from "./FeedbackOptions.styled";
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return (<StyledOptionsDiv>
        {options.map((option, index) => <StyledOptionsButton type="button" key = {index} onClick={() => onLeaveFeedback(option)}>
            {capitalizeFirstLetter(option)}</StyledOptionsButton>)
}
       </StyledOptionsDiv>)


}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
}
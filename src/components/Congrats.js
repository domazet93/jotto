import React from 'react';
import propTypes from 'prop-types';

/**
 * Functional component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element}
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrats;

Congrats.propTypes = {
  success: propTypes.bool.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for congratulatory message.
 * @function Congrats
 * @param {object} props - React props
 * @returns {JSX.Element}
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
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
  success: PropTypes.bool.isRequired
};

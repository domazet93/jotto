import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * class component for word.
 * @function Input
 * @returns {JSX.Element}
 */
class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const contents = this.props.success ? null : (
      <form class="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);

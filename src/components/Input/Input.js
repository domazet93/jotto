import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * class component for word.
 * @function Input
 * @returns {JSX.Element}
 */
class Input extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Input);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChange } from '../actions';

class InputField extends Component {
  onTextChange(event) {
    this.props.textChange(event.target.value);
  }
  render() {
    return (
      <textarea 
        rows="10" 
        cols="80" 
        resize="none" 
        name="text" 
        style={styles.inputForm} 
        onChange={this.onTextChange.bind(this)} 
      />
    );
  }
}

const styles = {
  inputForm: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '12px',
    backgroundColor: '#222',
    border: '1px solid #60dafb',
    resize: 'none',
    outline: 'none',
    color: '#60dafb',
  },
};

export default connect(null, {textChange})(InputField);
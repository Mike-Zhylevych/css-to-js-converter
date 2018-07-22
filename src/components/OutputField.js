import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { connect } from 'react-redux';

class OutputField extends Component {
  render(){
    return(
      <div>
          <div id="stat" dangerouslySetInnerHTML={{__html: this.props.jsChunk}} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jsChunk: state.output.jsChunk
  }; 
};

export default connect(mapStateToProps)(OutputField);
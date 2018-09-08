import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import InputField from './components/InputField';
import OutputField from './components/OutputField'

class App extends Component {  
  copyText() {
	console.log('blla');
  } 
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <div>
        <header style={styles.header}>
          <div style={styles.titleWrapper}>
            <h1 style={styles.title}>Css to react converter</h1>
            <div style={styles.infoMessage}>Please fill the form below with plain css code chunk.</div>
            <InputField />
          </div>
          <img src={logo} style={styles.logo} alt="logo" />
        </header>
        <div style={styles.contentWrapper}>
          <div style={styles.outputLabel} onClick={this.copyText.bind(this)}>Whoa! get the code chunk ready for js import.</div>
          <OutputField />
        </div>
      </div>
      </Provider>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#222',
    height: '280px',
    padding: '20px',
    color: 'white',
    display: 'flex',
  },
  title: {
    fontSize: '1.5em',
  },
  titleWrapper: {
    verticalAlign: 'top',
    flex: '1 70%',
    flexDirection: 'column',
  },
  infoMessage: {
    fontSize: 'small',
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
  },
  contentWrapper: {
    padding: '20px',
    color: '#1ab6e1',
  },
  outputLabel: {
    color: '#000', 
    fontSize: '1.5em',
    marginBottom: '20px',
    WebkitUserSelect: 'none', 
    MozUserSelect: 'none', 
    MsUserSelect: 'none', 
    userSelect: 'none',
    display: 'inline-flex',
    paddingRight: '45px',
  },
  copyToClipboard: {
    padding: '10px',
    fontSize: '12px',
    backgroundColor: '#ccc',
    borderRadius: '3px',
    border: '0',
  },
};

export default App;

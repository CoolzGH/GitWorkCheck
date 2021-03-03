import React from 'react';
import './App.css';
import Teacher from './components/Teacher';
import Teachers from './components/Teachers';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Teachers</h1>
        <Teachers/>
      </>
    );
  }
}

export default App;
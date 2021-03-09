import React from 'react';
import './App.css';
import Teacher from './components/Teacher';
import Teachers from './components/Teachers';
import Table from './components/Table';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Teachers</h1>
        <Table/>
      </>
    );
  }
}

export default App;
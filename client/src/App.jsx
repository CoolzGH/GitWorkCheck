import React from 'react';
import './App.css';
import Navbar from './components/Navbar';


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <h1>Hello world</h1>
        <h2>Hey</h2>
      </>
    );
  }
}

export default App;

import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
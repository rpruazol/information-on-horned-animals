import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class App extends React.Component {
  render() {
    return (
      
      <Container className="App">
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}
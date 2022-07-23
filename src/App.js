import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React from 'react';
import HornedBeastModal from './HornedBeastModal'


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clicked: false
    }

  }
    handleClose = () => {
      this.setState({clicked: false})
    }

    handleOpen = () => {
      this.setState({clicked: true})
    }

    
    render() {
    console.log(this.state)
    return (
      
      <div className="App">
        <Header />
        <Main handleOpen={this.handleOpen} />
        <HornedBeastModal clicked={this.state.clicked} handleClose={this.handleClose}  
        />
        <Footer />
      </div>
    );
  }
}
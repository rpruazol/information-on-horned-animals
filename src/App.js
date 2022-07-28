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
      clicked: false,
      detail: {}
      
    }

  }
    handleClose = () => {
      this.setState({clicked: false})
    }

    handleOpen = (e, count=0) => {
      const output = {...e}
      output.count = count
      this.setState({clicked: true})
      this.setState({detail: output})
    }

    
    render() {
    return (
      
      <div className="App">
        <Header />
        <Main handleOpen={this.handleOpen} />
        <HornedBeastModal 
        clicked={this.state.clicked} 
        handleClose={this.handleClose}
        detail={this.state.detail}
        />
        <Footer />
      </div>
    );
  }
}
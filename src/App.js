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
      detail: {
        "_id": 4,
        "image_url": "https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80",
        "title": "UniLego",
        "description": "Lego figurine dressed in a unicorn outfit",
        "keyword": "unilego",
        "horns": 1,
        "count": 0
      }
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
    console.log(this.state)
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
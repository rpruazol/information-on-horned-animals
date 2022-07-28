import React from "react";
import Form from "react-bootstrap/Form";


export default class FilterForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: null,
      type: 'horns'
    }
  }

  getQuery = (e) => {
    this.setState({query: parseInt(e.target.value)}, () => {
      console.log(this.state)
      this.props.filterResults(this.state);
    })
  }


  render() {
    return (
      <>
        <Form.Group>
          <Form.Select onChange={this.getQuery}>
            <option>Number of Horns</option>
            {this.props.hornNumberArray.map(horn => {
              return (
                <option>{horn}</option>
              )
            })}
          </Form.Select>
        </Form.Group>

      </>
    )
  }
}
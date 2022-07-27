import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: null,
            type: 'titleOrKeyword'
        }
    }

    getQuery = (e) => {
        this.setState({query: e.target.value}, () => {
            this.props.filterResults(this.state);
        })
    }
    render() {
        return (
            <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="search" placeholder="title or keyword" onChange={this.getQuery} />
                </Form.Group>
            </>
        )
    }
}
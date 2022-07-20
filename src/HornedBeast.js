import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top" src={this.props.image_url}
                    style={{width: '150px'}}
                />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary">upvote</Button>
                </Card.Body>
            </Card>
        )
    }
}
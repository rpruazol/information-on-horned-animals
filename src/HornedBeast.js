import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default class HornedBeast extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}


	handleClickUpVote = () => {
		const newNum = this.state.count++
		this.setState({ state: newNum })
	}



	render() {
		return (
			<Card style={{ width: '20rem' }} className="m-1">
					<Card.Img
						variant="top" src={this.props.image_url}
						style={{ width: '250px'}, {border: 'lightblue 1px dashed'}}
						className="rounded mx-auto d-block mt-5"
					/>
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>
						{this.props.description}
					</Card.Text>
					<Card.Img
						varient="top"
						src='./heart.png'
						style={{ width: '50px' }}
						id="heart"
						onClick={this.handleClickUpVote}
					/>
					<Card.Title>
						{this.state.count}
					</Card.Title>
				</Card.Body>
			</Card>
		)
	}
}
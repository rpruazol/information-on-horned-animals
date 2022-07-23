import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import HornedBeastModal from "./HornedBeastModal";

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
		console.log(this.state.count)
	}
  
	render() {
		return (
			<Card style={{ width: '18rem' }} className="h-100">

				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>{this.props.description}</Card.Text>
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
				<Card.Img
					onClick={this.props.handleOpen}
					src={this.props.image_url}
				/>
			</Card>
		)
	}
}
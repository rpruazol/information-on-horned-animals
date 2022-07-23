import React from "react";
import HornedBeast from './HornedBeast'
import hornedArray from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



export default class Main extends React.Component {
	render() {

		const renderedHornArray = hornedArray.map(value => {
			return (
				<Col>
					<HornedBeast
						_id={value._id}
						image_url={value.image_url}
						title={value.title}
						description={value.description}
						keyword={value.keyword}
						horns={value.horns}
						key={value._id}
					/>
				</Col>
			)
		})
		return (
			<Container>
				<Row xs={1} sm={2} md={3} lg={4} className="g-4">
					{renderedHornArray}
				</Row>
			</Container>

		)
	}
}
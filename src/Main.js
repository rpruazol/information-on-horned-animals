import React from "react";
import HornedBeast from './HornedBeast'
import hornedArray from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';


export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			query: null
		}
	}
	filterResults = (query) => {
		console.log((query))
		const re = query.type === "titleOrKeyword" ? new RegExp(query.query, 'i') : new RegExp('null');
		console.log(re);
		const outputArray = hornedArray.filter(obj => {
			console.log(re.test(obj.keyword))
			console.log(re.test(obj.title))
			console.log(obj.horns === query.query)
			return re.test(obj.title) || re.test(obj.keyword) || obj.horns === query.query
		})
		console.log(outputArray)
		this.setState({ query: outputArray })


	}
	render() {
		const outputArray = this.state.query === null ? hornedArray : this.state.query
		return (
			<Container>
				<SearchForm
					filterResults={this.filterResults}
				/>
				<FilterForm
					hornNumberArray={hornedArray.map(value => value.horns).filter((num, idx) => hornedArray.map(value => value.horns).indexOf(num) === idx)}
					filterResults={this.filterResults}
				/>
				<Row xs={1} sm={2} md={3} lg={4} className="g-4">
					{outputArray.map(value => {
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
										handleOpen={this.props.handleOpen}
									/>
								</Col>
							)
						})
					}
				</Row>
			</Container>

		)
	}
}
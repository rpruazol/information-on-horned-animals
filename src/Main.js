import React from "react";
import HornedBeast from './HornedBeast'
// import hornedArray from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';



export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			query: null,
			hornedArray: [],
			isLoaded: false
		}
	}

	componentDidMount() {
		fetch("http://localhost:3000/")
			.then(res => {
				return res.json()
			})
			.then(result => {
				console.log(result)
				this.setState({
					isLoaded: true,
					hornedArray: result
				});
			},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	filterResults = (query) => {
		const re = new RegExp(query, 'i')
		const outputArray = this.state.hornedArray.filter(obj => {
			return re.test(obj.title) || re.test(obj.keyword)
		})
		this.setState({ query: outputArray })


	}
	render() {
		const { error, isLoaded, hornedArray } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Please wait...</div>
		} else {
			const outputArray = this.state.query === null ? hornedArray : this.state.query
			return (
				<Container>
					<SearchForm
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
}
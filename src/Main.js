import React from "react";
import HornedBeast from './HornedBeast'
import hornedArray from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default class Main extends React.Component {
    render() {

        const renderedHornArray = hornedArray.map(value => {
            return (
                <HornedBeast
                    _id={value._id}
                    image_url={value.image_url}
                    title={value.title}
                    description={value.description}
                    keyword={value.keyword}
                    horns={value.horns}
                    key={value._id}
                />
            )
        })
        console.log(renderedHornArray)
        return (
            <Row>
                {renderedHornArray}
            </Row>

        )
    }
}
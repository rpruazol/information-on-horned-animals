import React from "react";
import HornedBeast from './HornedBeast'
import hornedArray from './hornedArray.json'



export default class Main extends React.Component {    
    render(){
        const renderedHornArray = [];
        hornedArray.forEach(value => {
            renderedHornArray.push(
            <HornedBeast 
                _id={value._id}
                image_url={value.image_url}
                title={value.title}
                description={value.description}
                keyword={value.keyword}
                horns={value.horns}
            />)
        })
        console.log(renderedHornArray)
        return (
            <>
                {renderedHornArray}
            </>

        )
    }
}
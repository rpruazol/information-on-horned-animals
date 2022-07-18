import React from "react"

export default class HornedBeast extends React.Component {
    render() {
        return (
            <div id={this.props._id} class="horned-beast">
                <h1>
                    {this.props.title}
                </h1>
                <img src={this.props.image_url} alt={this.props.keyword}/>
                <p>
                    {this.props.description}
                </p>
                {/* this.props.keyword
                this.props.horns */}
            </div>
        )
    }
}
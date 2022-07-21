import React from "react"

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Information-on-horned-animals'
        }
    }

    clickHandler = () => {
        const newTitle = this.state.title === 'Information-on-horned-animals' ? 'Gallery of Horns' : 'Information-on-horned-animals'
        this.setState({ title: newTitle })
        console.log(this.state.title)
    }
    render() {
        return (
            <h1 onClick={this.clickHandler}>
                {this.state.title}
            </h1>
        )
    }
}
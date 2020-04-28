import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
        <li>{this.props.ingredientItem}</li>
        )
    }
}

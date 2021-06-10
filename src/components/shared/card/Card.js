import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="c-card-block">
                    <a href={`/buy/${this.props.data}`}>
                    <img src="https://i.imgur.com/7AyUhAD.png" alt="book"/>
                    <h3>{this.props.data}</h3>
                    </a>
                </div>
            </div>
        )
    }
}

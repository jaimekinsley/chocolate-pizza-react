import React, { Component } from 'react'

export default class BottomThird extends Component {
    render() {
        return (
            <div>
                <div class="dashed-line"></div>
                <section className="bio">
                    <img src="van-pic.png" />
                    <p className="vanessa">{this.props.name}</p>
                    <p className="about-vanessa">Food enthusiast, photography fan.
                     Add a pinch of raw foodism and that's pretty much who I am.</p>

                     <button>Share Recipe</button>
                </section>               
            </div>
        )
    }
}

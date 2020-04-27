import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
            <div className="header-left">
                <img src = "small-logo.png" />
                <h1>Delicious</h1>
                <p className="tagline">THE BEST FOOD BLOG ON THE WEB</p>  
            </div>

            <div className="header-right">
                <img src ="fb-icon.png"/>
                <img src ="twit-icon.png"/>
                <img src ="gp-icon.png"/>
                <img src ="insta-icon.png"/>
                <img src ="flic-icon.png"/>
                <img src ="rss-icon.png"/>
                <img src ="mail-icon.png"/>
            </div>
            </div>
        )
    }
}

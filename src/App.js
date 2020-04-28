import React, { Component } from 'react'
import  Header from './Header'
import MainSection from './MainSection'
import RecipeSection from './RecipeSection'
import BottomThird from './BottomThird'
import Footer from './Footer'
import './App.css'
// import { ingredients } from './ingredients'

export default class App extends Component {
  render() {
    return (
      <div>
      
      <Header
      picSource = "small-logo.png"
      />
      <MainSection
      pizzaStyle="Chocolate Pizza"
      pubDate = "15 DEC 2013"
      /> 
      <RecipeSection/>
      <BottomThird
      name="Vanessa Stevenson"/>
      <Footer/>

      </div>
    )
  }
}


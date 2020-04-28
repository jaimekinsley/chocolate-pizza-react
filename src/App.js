import React, { Component } from 'react'
import  Header from './Header'
import MainSection from './MainSection'
import RecipeSection from './RecipeSection'
import BottomThird from './BottomThird'
import Footer from './Footer'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>

      <Header/>
      <MainSection/> 
      <RecipeSection/>
      <BottomThird
      name="Vanessa Stevenson"/>
      <Footer/>

      </div>
    )
  }
}


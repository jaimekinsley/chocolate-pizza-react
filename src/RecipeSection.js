import React, { Component } from 'react'

export default class RecipeSection extends Component {
    render() {
        return (
            <div>
                <section>
            <img src='list-bg.png'/>
            
            <ul className="recipe-list">
                <li>1 1/2 cups milk</li>
                <li>1 1/2 cups heavy cream</li>
                <li>1/2 cup mascarpone</li>
                <li class="line-through">1/3 granulated sugar</li>
                <li>1/2 tsp pink salt</li>  
                <li class="line-through">2 eggs yolk</li>    
                <li>1 lb Black Mission Figs</li>
                <li>1 lemon, juiced</li>
                <li>1/2 cup brown sugar</li>
                <li>2 tbsp butter</li>
                <li>2-4 tbsp water</li>
                <li>1 cup honey roasted pecans, roughly chopped</li>
            </ul>
        </section>
            </div>
        )
    }
}

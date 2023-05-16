import React from 'react'
import CardView from './CardView'
import pizzas from '../data/pizzas.json'
// import { getData } from '../helpers/getData'

const Card = () => {
  return (
    <div className='card_grid'>
        <CardView pizzas={pizzas}/>
    </div>
  )
}

export default Card
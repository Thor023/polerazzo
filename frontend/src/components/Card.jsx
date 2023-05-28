import React from 'react'
import CardView from './CardView'
import poleras from '../data/poleras.json'
// import { getData } from '../helpers/getData'

const Card = () => {
  return (
    <div className='card_grid'>
        <CardView poleras={poleras}/>
    </div>
  )
}

export default Card
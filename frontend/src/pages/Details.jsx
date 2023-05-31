import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import icon from '../assets/images/pizza.png'
import { CartContext } from '../context/CartContext'
import data from '../data/poleras.json'

const Details = () => {
  const [polera, setPolera] = useState('')
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const navigate = useNavigate()
  const {addToCart} = useContext(CartContext);

  useEffect(()=>{
      detailsPolera()
  },[])

  const detailsPolera = () =>{
    setPolera(data.find(item => item.id === id))
    setLoading(false)
  }

  if(loading){
    return(
      <div style={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <h1>Loading....</h1>
      </div>
    )
  }

  
    return (
    <>
    <article className='wrapper'>
      <div className='grid__img'>
        <img src={polera.img} alt="" />
      </div>
      <div className='description'>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginRight:'1rem', cursor:'pointer'}}>
        <h1>{polera.name}</h1>
        <span>
          <svg onClick={()=>navigate(-1)}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width:'30px'}}><path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        </div>
        <hr/>
        <p>{polera.desc}</p>

        <div className='ingredients' style={{padding:'0'}}>
          <span>Colores</span>
          <ul>
            {
              polera.ingredients.map((item, idx) => (
                <li key={idx}>

                  {item}
                </li>
              ))
            }
          </ul>
        </div>
        <div className='info_card'>
        <h1>Precio: ${polera.price}</h1>
        <button type='button' onClick={()=> addToCart(polera)}>
        Añadir
          <span>&#x1F6D2;</span>
          </button>
        </div>
      </div>
    </article>
    </>
  )
}

export default Details
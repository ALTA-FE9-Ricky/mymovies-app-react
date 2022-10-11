import React from 'react'
import { ButtonPrimary } from './Button'

function Card2(props) {

    return (
      <div className='flex flex-col justify-center p-4 shadow-lg rounded-lg border bg-white'>
        <div className='h-full w-full cursor-pointer' onClick={props.onNavigate}>
        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} />
        <p className='text-center'>{props.title}</p>
        </div>
        <ButtonPrimary label= "Remove From Favorite " onClick={props.addFavorite}/>
      </div>
    )
  }


export default Card2
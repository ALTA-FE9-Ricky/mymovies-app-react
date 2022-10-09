import React, { Component } from 'react'
import { ButtonPrimary } from './Button'
export class Card extends Component {
  render() {
    return (
      <div className='flex flex-col justify-center p-4 shadow-lg rounded-lg border bg-white'>
        <div className='h-full w-full' onClick={this.props.onNavigate}>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        <p className='text-center'>{this.props.title}</p>
        </div>
        <ButtonPrimary label= "Add to Favorite " onClick={this.props.addFavorite}/>
      </div>
    )
  }
}

export default Card
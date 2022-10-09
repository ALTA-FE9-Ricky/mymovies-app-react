import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { FcFilmReel } from 'react-icons/fc'
export class layout extends Component {
  render() {
    return (
      <>
      <div className='w-full h-screen overflow-auto bg-Yellow'>
        <nav className='w-full p-4 bg-neon top-0 sticky'>
          <div className='flex flex-col gap-4 md:flex-row lg:flex-row justify-between'>
          <Link to={"/"}>
            <h1 className='text-hitam font-bold text-4xl font-sans'>RiNema</h1>
            </Link>
            <Link to={"/Favorite"}>
            <h1 className='text-hitam font-bold text-4xl font-sans'>Favorite</h1>
            </Link>
            </div>
        </nav>
        {this.props.children}</div>
        </>
    )
  }
}

export default layout
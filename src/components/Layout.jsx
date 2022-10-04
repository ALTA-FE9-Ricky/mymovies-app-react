import React, { Component } from 'react'

export class layout extends Component {
  render() {
    return (
      <div className='w-full h-screen overflow-auto'>
        <nav className='w-full p-4 bg-alta-primary top-0 sticky'>
            <h1 className='text-teal-600 font-bold text-4xl font-sans text-center'>RiNema</h1>
        </nav>
        {this.props.children}</div>
    )
  }
}

export default layout
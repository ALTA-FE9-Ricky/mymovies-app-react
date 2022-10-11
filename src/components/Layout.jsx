import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsMoonFill } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import { ThemeContext } from 'utils/context'
import { ButtonThird } from './Button'

function Layout(props) {

  const { isLight,setIsLight} = useContext(ThemeContext)

    return (
      <>
      <div className='w-full h-screen overflow-auto bg-Yellow dark:bg-Yellow-dark'>
        <nav className='w-full p-4 bg-neon dark:bg-neon-black top-0 sticky'>
          <div className='flex flex-col gap-4 md:flex-row lg:flex-row justify-between'>
          <Link to="/">
            <h1 className='text-hitam font-bold text-4xl font-sans'>RiNema</h1>
            </Link>
            <div>
            <ButtonThird label={isLight ? <BsMoonFill className='h-10 w-10'/> : <BsSun className='h-10 w-10'/>} onClick={() => setIsLight(!isLight)} />
            </div>
            <Link to="/Favorite">
            <h1 className='text-hitam font-bold text-4xl font-sans'>Favorite</h1>
            </Link>
            </div>
        </nav>
        <div className='w-full h-full bg-Yellow dark:bg-Yellow-dark'>{props.children}
        </div>
        </div>
        </>
    )
  }

export default Layout
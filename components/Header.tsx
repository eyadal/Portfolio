import React from 'react'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex flex-col items-center justify-between p-5'>
      <nav className='space-x-5'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/projects'>Projects</Link>
      </nav>
    </header>
  )
}

export default Header

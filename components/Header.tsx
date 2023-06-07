import React from 'react'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex min-h-screen flex-col items-center justify-between p-24'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/projects'>Projects</Link>
      </nav>
    </header>
  )
}

export default Header

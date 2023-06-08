import { Suspense } from 'react'

type Props = {}

interface Repository {
  id: number
  name: string
  html_url: string
}

const page = async (props: Props) => {
  async function getData() {
    const res = await fetch('https://api.github.com/users/eyadal/repos')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }
  const data = await getData()
  const myRepos = data.map(({ id, name, html_url }: Repository) => (
    <li key={id}>
      <a href={html_url}>{name}</a>
    </li>
  ))
  return (
    <main className='flex flex-col items-center justify-between '>
      <h1 className='text-4xl py-4'>Projects</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ul>{myRepos}</ul>
      </Suspense>
    </main>
  )
}

export default page

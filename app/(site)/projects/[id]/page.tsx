import React from 'react'

type Props = {
  params: {
    id: string
  }
}

const page = ({ params }: Props) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl py-4'>Single project {params.id}</h1>
    </main>
  )
}

export default page

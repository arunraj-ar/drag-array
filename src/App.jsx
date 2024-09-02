import { useState } from 'react'
import Cards from './Cards'
import { data } from './dummy'

function App() {

  return (
    <div className=' min-h-dvh flex justify-center items-center'>
    <Cards data={data} />
    </div>
  )
}

export default App

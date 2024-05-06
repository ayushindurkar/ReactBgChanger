import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('gray')

  // function changeColor(color){
  //   setcolor(color)
  // }



  return (
    <div className=' w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button onClick={() => setcolor('red')} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold' style={{backgroundColor: 'red'}}>Red</button>{" "}
          <button onClick={() => setcolor('green')} className=' outline-none px-4 py-1 rounded-full shadow-lg  text-white font-bold' style={{backgroundColor: 'green'}}>Green</button>{" "}
          <button onClick={() => setcolor('orange')} className=' outline-none px-4 py-1 rounded-full shadow-lg  text-white font-bold' style={{backgroundColor: 'orange'}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

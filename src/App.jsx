/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import Articles from './components/Articles'
import Bookmark from './components/Bookmark'


function App() {
  return (
    <>
    <div className='w-[1100px] mx-auto'>
    <nav className='flex justify-between border-b py-4'>
    <h3 className='text-4xl font-semibold'>Knowledge Cafe</h3>
    <img className='w-12 h-12 rounded-full' src="./../public/profile.png" alt="" />
    </nav>
    <div>
      <Articles></Articles>
      <Bookmark></Bookmark>
    </div>
    </div>
    </>
  )
}

export default App

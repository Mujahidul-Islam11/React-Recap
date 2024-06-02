/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import Articles from './components/Articles'
import Bookmark from './components/Bookmark'


function App() {
  return (
    <>
    <div className='md:w-[1100px] mx-auto'>
    <nav className='flex justify-between border-b py-6'>
    <h3 className='text-2xl md:text-4xl font-bold cursor-pointer'>Knowledge Cafe</h3>
    <img className='w-12 h-12 rounded-full cursor-pointer' src="./../public/profile.png" alt="" />
    </nav>
    <div className='mt-6'>
      <Articles></Articles>
      <Bookmark></Bookmark>
    </div>
    </div>
    </>
  )
}

export default App

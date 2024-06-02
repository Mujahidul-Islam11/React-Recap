/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Articles from './components/Articles'
import Bookmark from './components/Bookmark'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (title, reading_time) =>{
    const bookmarkArr = [];
    const addBookmark = {title, reading_time};
    bookmarkArr.push(addBookmark);
    console.log(bookmarkArr);
  }
  return (
    <>
    <div className='md:w-[1100px] mx-auto'>
    <nav className='flex justify-between border-b py-6'>
    <h3 className='text-2xl md:text-4xl font-bold cursor-pointer'>Knowledge Cafe</h3>
    <img className='w-12 h-12 rounded-full cursor-pointer' src="./../public/profile.png" alt="" />
    </nav>
    <div className='mt-6'>
      <Articles handleBookmark={handleBookmark}></Articles>
      <Bookmark></Bookmark>
    </div>
    </div>
    </>
  )
}

export default App

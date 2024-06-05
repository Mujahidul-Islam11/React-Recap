/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Articles from './components/Articles'
import Bookmark from './components/Bookmark'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);
  const handleBookmark = (article) =>{
    const bookmark = [...bookmarks, article];
    setBookmarks(bookmark)
  }
  const handleMarkAsRead = (time, id) =>{
    const readingTime = Number(time)
    setMarkAsRead(markAsRead+readingTime)
    const remainingBookmarks = bookmarks?.filter(bookmark => bookmark.id !== id); 
    //filter process:- jei id gula same nah ogula daw
    setBookmarks(remainingBookmarks);
  }
  // when mark as read button is clicked update the bookmarks state, when the button is clicked
  // the handler will run and sum numbers in the markAsRead state and will filter if the
  // id that is clicked give me the other id's that are not matchable.
  return (
    <>
    <div className='md:w-[1100px] mx-auto'>
    <nav className='flex justify-between border-b py-6'>
    <h3 className='text-2xl md:text-4xl font-bold cursor-pointer'>Knowledge Cafe</h3>
    <img className='w-12 h-12 rounded-full cursor-pointer' src="./../public/profile.png" alt="" />
    </nav>
    <div className='mt-6 flex justify-between'>
      <Articles handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Articles>
      <Bookmark bookmarks={bookmarks} markAsRead={markAsRead}></Bookmark>
    </div>
    </div>
    </>
  )
}

export default App

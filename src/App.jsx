import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmars = blog => {
    // console.log("Bookmarking blog:", blog);
    setBookmarks(previousBookmarks => [...previousBookmarks, blog]);
  }

  return (
    <>
      <Header />
      <Hero />
      <div className='flex justify-between items-start gap-4 mt-4 container mx-auto p-4'>
        <Blogs handleBookmars={handleBookmars} />
        <Bookmarks bookmarks={bookmarks}/>
      </div>
    </>
  )
}

export default App

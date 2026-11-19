import { useState } from 'react'
import BookForm from './components/BookForm'
import EditBook from './components/EDITBOOK'
import BooksView from './components/BooksView'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bookId, setBookId] = useState(0);

  return (
    <>
    <h2>Form Demo</h2>
    <BookForm/>
    <EditBook bookId={bookId}/>
    <BooksView />
    </>
  )
}

export default App

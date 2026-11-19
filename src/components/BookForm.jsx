import { useState } from 'react'

function BookForm() {
  const [book, setBook] = useState({
    "id": "",
    "title": "",
    "author": "",
    "rating": 0,
    "year_published": 0
  });

  const handleChange = (evt) => {
    let value = evt.target.value;
    const property = evt.target.name;
    value = property === 'year_published' ? Number(value) : value
    setBook({...book, [property]:value})
    console.log(book);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Inside submit");
    fetch('http://localhost:4000/books', {
        method: 'POST',
        body: JSON.stringify(book)
    });

  }


  return (
    <>
    <h2>Create new book</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add title" name="title" value={book.title} onChange={handleChange} />
        <input type="text" placeholder="Add author" name="author" value={book.author} onChange={handleChange} />
        <input type="text" placeholder="Add year" name="year_published" value={book.year_published} onChange={handleChange} />
        <input type="submit" value="Add new book"/>
    </form>
    </>
  )
}

export default BookForm

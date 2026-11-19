import { useState } from 'react'

function EditBook({id}) {


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    console.log(formData);
    const formObject = Object.fromEntries(formData.entries());

    fetch('http://localhost:4000/books/', {
        method: 'POST',
        body: JSON.stringify(formObject)
    });

  }


  return (
    <>
    <h2>Edit book</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add title" name="title" />
        <input type="text" placeholder="Add author" name="author" />
        <input type="text" placeholder="Add year" name="year_published" />
        <input type="text" placeholder="Add a rating" name="rating" />
        
        <input type="submit" value="Edit book"/>
    </form>
    </>
  )
}

export default EditBook

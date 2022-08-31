import React from 'react'

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMGdLfHW9qcKsrZAvobs6W-1GDd5Bsm2LJQ&usqp=CAU" alt="" />
        <div>{bookData.book_name}</div>
        <div>{bookData.release_year}</div>
        <div>{bookData.category}</div>
      </div>
    </div>
  )
}

export default BookCard
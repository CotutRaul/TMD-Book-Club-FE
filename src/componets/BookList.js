import { makeStyles } from '@mui/styles'
import React from 'react'
import BookCard from './BookCard'


function BookList(props) {
    const classes=useStyle()
    return (
        <div className={classes.bookList} >
            {props.books && props.books.map((book) =>
                <BookCard key={book.id} book={book} />)}
        </div>
    )
}


const useStyle = makeStyles({
    bookList:{
        display: "flex",
        flexWrap: "wrap"
    }
})

export default BookList
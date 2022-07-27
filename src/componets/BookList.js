import { makeStyles } from '@mui/styles'
import React from 'react'
import BookCard from './BookCard'


function BookList(props) {
    const classes = useStyle()
    return (
        <div className={classes.bookList} >
            {props.books && props.books
            .filter((book) => {return props.filter ? book.title.toLowerCase().includes(props.filter.search.toLowerCase()) || book.author.toLowerCase().includes(props.filter.search.toLowerCase()) : true}) 
            .map((book) =>
                <BookCard key={book.id} book={book} action={props.action}/>)}
        </div>
    )
}


const useStyle = makeStyles({
    bookList: {
        display: "flex",
        flexWrap: "wrap"
    }
})

export default BookList
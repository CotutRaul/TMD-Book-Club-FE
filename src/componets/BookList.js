import { makeStyles } from '@mui/styles'
import React from 'react'
import { BookCard } from './BookCard'


export const BookList = (props) => {
    const classes = useStyle()
    return (
        <div className={classes.bookList} >
            {props.books && props.books
            .filter((book) => {return props.filter?.search ? book.info.title.toLowerCase().includes(props.filter.search.toLowerCase()) || book.info.author.toLowerCase().includes(props.filter.search.toLowerCase()) : true}) 
            .filter((book) => {return props.filter?.onlyAvailable ? book.available===true : true})
            .sort((a, b) => (a.available < b.available) ? 1 : -1)
            .map((book) =>
                <BookCard key={book.id} book={book} action={props.action}/>)}
        </div>
    )
}


const useStyle = makeStyles({
    bookList: {
        display: "flex",
        flexWrap: "wrap",
    }
})
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BookList } from '../../componets/BookList'
import { getMyBooks } from '../../services/userService'
import { useSelector } from "react-redux"
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'


export const MyBooks = () => {
  const [books, setBooks] = useState();
  const user = useSelector((state) => state.user.value)
  const classes = useStyle()

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getMyBooks({ id: user.id }))
    }

    fetchData()
  }, [])


  return (
    <div>
      <div className={classes.headerLayer} >
        <h1>My Books:</h1>
        <Button className={classes.addButton} type="submit" variant="outlined">Add book</Button>
      </div>
      <BookList books={books}></BookList>
    </div>
  )
}

const useStyle = makeStyles({
  headerLayer: {
    display: "flex",
    justifyContent: "space-between",
    padding:"10px",
  },
  addButton:{
    height:"50px",
    marginBlock:"auto"
  }
})
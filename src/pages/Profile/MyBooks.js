/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BookList } from '../../components/BookList'
import { getMyBooks } from '../../services/userService'
import { useSelector } from "react-redux"
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AddBookPopup } from '../../features/AddBookPopup'


export const MyBooks = () => {
  const [books, setBooks] = useState();
  const user = useSelector((state) => state.user.value)
  const classes = useStyle()

  const [openAddBookPopup, setOpenAddBookPopup] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getMyBooks({ id: user.id }))
    }

    fetchData()
  }, [openAddBookPopup])


  const renderAddBookPopup = () => {
    return <AddBookPopup open={openAddBookPopup} action={setOpenAddBookPopup} />
  }

  return (
    <div>
      <div className={classes.headerLayer} >
        <h1>My Books:</h1>
        <Button className={classes.addButton} type="submit" variant="outlined" onClick={() => { setOpenAddBookPopup(true) }}>Add book</Button>
      </div>
      <BookList books={books}></BookList>
      {renderAddBookPopup()}
    </div>
  )
}

const useStyle = makeStyles({
  headerLayer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  addButton: {
    height: "50px",
    marginBlock: "auto"
  }
})
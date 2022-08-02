/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BookList } from '../../components/BookList'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { getAllBookInfo } from '../../services/bookInfoService'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RentWaitPopup } from '../../features/RentWaitPopup';

export const Home = () => {
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState({ search: "", onlyAvailable: null });
  const classes = useStyle()

  const [openRentWaitPopup, setOpenRentWaitPopup] = useState(false)
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getAllBookInfo())
    }

    fetchData()

  }, [openRentWaitPopup])

  const handleAction = (open, book) => {
    setOpenRentWaitPopup(open)
    setBook(book)
  }

  const renderExtendRentPopup = () => {
    return <RentWaitPopup open={openRentWaitPopup} book={book} action={handleAction} />
  }

  return (
    <div>
      <div className={classes.searchField}>
        <TextField
          id="searchField"
          label="Search"
          type="text"
          onChange={e => setFilter({ ...filter, search: e.target.value })}
        />
        <FormControlLabel sx={{ marginLeft: "10px" }} control={<Checkbox size="large" onChange={e => { setFilter({ ...filter, onlyAvailable: e.target.checked }) }} />} label="Show only Available" />
      </div>
      <BookList books={books} action={handleAction} filter={filter}></BookList>
      {renderExtendRentPopup()}
    </div>
  )
}

const useStyle = makeStyles({
  searchField: {
    "& .MuiTextField-root": {
      margin: "20px 0 10px 5px",
      width: "300px",
    },
    display: "flex"
  }
})


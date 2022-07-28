/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BookList } from '../../componets/BookList'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { getAllBookInfo } from '../../services/bookInfoService'


export const Home = () => {
  const [books, setBooks] = useState(null);
  const [search, setSearch] = useState("");
  const classes = useStyle()

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getAllBookInfo())
    }

    fetchData()

  }, [])

  return (
    <div>

      <div className={classes.searchField}>
        <TextField
          id="searchField"
          label="Search"
          type="text"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <BookList books={books} filter={{ search: search }}></BookList>
    </div>
  )
}

const useStyle = makeStyles({
  searchField: {
    "& .MuiTextField-root": {
      margin: "20px 0 10px 5px",
      width: "300px",
    },
  }
})


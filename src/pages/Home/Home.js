/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BookList } from '../../componets/BookList'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { getAllBookInfo } from '../../services/bookInfoService'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const Home = () => {
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState({search:"", onlyAvailable:null});
  const classes = useStyle()

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getAllBookInfo())
    }

    fetchData()

  }, [])

  return (
    <div>
      {console.log(filter)}
      <div className={classes.searchField}>
        <TextField
          id="searchField"
          label="Search"
          type="text"
          onChange={e => setFilter({...filter, search: e.target.value})}
        />
        <FormControlLabel sx={{marginLeft:"10px"}} control={<Checkbox size="large" onChange={e => {setFilter({...filter, onlyAvailable: e.target.checked})}} /> } label="Show only Available" />
      </div>
      <BookList books={books} filter={filter}></BookList>
    </div>
  )
}

const useStyle = makeStyles({
  searchField: {
    "& .MuiTextField-root": {
      margin: "20px 0 10px 5px",
      width: "300px",
    },
    display:"flex"
  }
})


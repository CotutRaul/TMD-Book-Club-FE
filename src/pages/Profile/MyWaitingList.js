/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { BookList } from '../../components/BookList'
import { getWaitListForUser } from '../../services/waitListService'
import { useSelector } from "react-redux"
import { WaitListPopup } from '../../features/WaitListPopup'


export const MyWaitingList = () => {
  const [books, setBooks] = useState(null);
  const user = useSelector((state) => state.user.value)

  const [openExtendRentPopup, setOpenExtendRentPopup] = useState(false)
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setBooks(await getWaitListForUser({ userId: user.id }))
    }

    fetchData()
  }, [openExtendRentPopup])

  const handleAction = (open, book) => {
    setOpenExtendRentPopup(open)
    setBook(book)
  }

  const renderExtendRentPopup = () => {
    return <WaitListPopup open={openExtendRentPopup} book={book} action={handleAction} />
  }

  return (
    <div>
      <h1>My Waiting List:</h1>
      {renderExtendRentPopup()}
      <BookList books={books} action={handleAction} ></BookList>

    </div>

  )

}
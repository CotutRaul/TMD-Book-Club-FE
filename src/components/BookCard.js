/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import placeholderImage from '../assets/book.png'
import { makeStyles } from '@mui/styles'
import NotInterestedIcon from '@mui/icons-material/NotInterested';


export const BookCard = (props) => {
  const classes = useStyle()
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.book.info.title}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(jsonResult => setImageUrl(jsonResult.items[0].volumeInfo.imageLinks?.thumbnail ?? placeholderImage))
  }, [])


  return (
    <Card sx={{ maxWidth: 200, margin: 1, flex: "1 0 200px", position: "relative" }}>
      <CardActionArea disabled={!props.action} sx={{ height: "100%" }} onClick={() => props.action(true, props.book)}>
        <CardMedia sx={{ height: 275 }}
          component="img"
          image={imageUrl}
        />
        <CardContent sx={{ height: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.book.info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.book.info.author}
          </Typography>
          {props.book.returnDate && <Typography variant="subtitle2" color="text.secondary">
            {props.book.returnDate}<br />
            {props.book.userName}
          </Typography>}
        </CardContent>
        {props.book.available === false && <div className={classes.disabled}><NotInterestedIcon sx={{ fontSize: "200px", position: "absolute", color: "#b71105" }} /></div>}
      </CardActionArea>
    </Card>
  );
}

const useStyle = makeStyles({
  disabled: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
    zIndex: "1000",
    top: 0,
    left: 0,
    position: "absolute"
  },
})

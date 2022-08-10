import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addBook } from "../services/userService"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const AddBookPopup = (props) => {
    const [open, setOpen] = useState(false);
    const [bookDataInput, setBookDataInput] = useState({ title: "", author: "" });
    const user = useSelector((state) => state.user.value)


    const handleClose = () => { setOpen(false); props.action(false); };

    const handleClick = async () => {
        const fetchData = async () => {
            await addBook({ id: user.id, bookInfo: { title: bookDataInput.title, author: bookDataInput.author } })
        }
        if (bookDataInput.title !== "" && bookDataInput.author !== "") {
            await fetchData()
            handleClose()
        }
        else {
            alert("Insert data in all the fields!")
        }
    };

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Add Book
                    </Typography>
                    <div >
                        <Box sx={{ minWidth: 120, padding: "20px" }}>
                            <TextField
                                id="titleField"
                                label="Title"
                                type="text"
                                value={bookDataInput.title}
                                sx={{width: "300px", marginTop: "20px"}}
                                onChange={e => setBookDataInput({ ...bookDataInput, title: e.target.value })}
                            />
                            <TextField
                                id="authorField"
                                label="Author"
                                type="text"
                                value={bookDataInput.author}
                                sx={{width: "300px", marginTop: "20px"}}
                                onChange={e => setBookDataInput({ ...bookDataInput, author: e.target.value })}
                            />
                            <Button sx={{marginTop: "20px"}} variant="outlined" onClick={handleClick}>Add Book</Button>
                        </Box>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

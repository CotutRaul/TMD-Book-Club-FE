import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"
import { BookCard } from '../components/BookCard';
import { addRent } from '../services/rentsService'
import { addWaitList } from '../services/waitListService'
import { useNavigate } from "react-router-dom";



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

export const RentWaitPopup = (props) => {
    const user = useSelector((state) => state.user.value)
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);
    const [weeks, setWeeks] = useState("");

    const handleClose = () => { setOpen(false); props.action(false, null); setWeeks("") };

    const handleRentClick = () => {
        const fetchData = async () => {
            addRent({ userId: user.id, bookId: props.book.id, period: weeks })
        }
        if (weeks !== "") {
            if(fetchData())
            {
                handleClose()
                navigate('/myRented');
            }
        }
        else {
            alert("Select period")
        }
    };
    const handleWaitClick = () => {
        const fetchData = async () => {
            addWaitList({ userId: user.id, bookId: props.book.id })
        }
        fetchData()
        handleClose()

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
                        {props.book?.available === true ? "Rent Book" : "Add to waiting list"}
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <BookCard book={{ ...props.book, available: true }} />
                        <div>
                            <Box sx={{ minWidth: 120, padding: "20px" }}>
                                {props.book?.available === true && <FormControl fullWidth>
                                    <InputLabel id="weeks-select-label">Weeks</InputLabel>
                                    <Select
                                        labelId="weeks-select-label"
                                        id="weeks-select"
                                        value={weeks}
                                        label="Weeks"
                                        onChange={(e) => { setWeeks(e.target.value) }}
                                    >
                                        <MenuItem value={1}>One</MenuItem>
                                        <MenuItem value={2}>Two</MenuItem>
                                        <MenuItem value={3}>Three</MenuItem>
                                        <MenuItem value={4}>Four</MenuItem>

                                    </Select>
                                    <br />
                                    <Button variant="outlined" onClick={handleRentClick}>Rent</Button>
                                </FormControl>}
                                {props.book?.available === false && <Button variant="outlined" onClick={handleWaitClick}>Wait book</Button>}
                            </Box>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

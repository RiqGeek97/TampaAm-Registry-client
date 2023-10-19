import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as skaterService from '../services/SkaterServices';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    } from '@mui/material';

export const SkaterTable = () => {
    const [skaters, setSkaters]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        skaterService.getAllSkaters()
        .then(res => {
            setSkaters(res.data);
        })
    }, [])

    function requestDataFromApi(){
        skaterService.getAllSkaters()
        .then(res => {
            setSkaters(res.data);
        })
    }

    const goToUpdate = (id) => {
        navigate(`/update/${id}`);
    }

    const deleteSkater = (id) => {
        skaterService.deleteSkater(id).then(() =>{
            requestDataFromApi();
        })
    }
    

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Team
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        skaters.map((skater)=> {
                            return(
                                <TableRow
                                    hover
                                    key={skater.id}
                                >
                                    <TableCell>
                                        {skater.id}
                                    </TableCell>
                                    <TableCell>
                                        {skater.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {skater.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {skater.team}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(skater.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteSkater(skater.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
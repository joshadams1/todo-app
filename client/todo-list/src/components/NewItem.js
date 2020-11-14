import React, { useState } from 'react';

import { TextField, Grid, IconButton } from '@material-ui/core';

import CheckedIcon from '@material-ui/icons/CheckCircle';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


const ListItem = () => {
    const [button, setButton] = useState(false);

    const handleClick = () => {
        setButton(!button);
    }

    return (
        <div style={{ "background-color": "white" }}>
            <Grid container justify="space-between" spacing={5} alignItems="baseline">
                <h1>{button}</h1>
                <Grid item>
                    <TextField
                        label="Outlined"
                        required
                        id="filled-required"
                        defaultValue="Hello World"
                        variant="filled"
                    ></TextField>
                </Grid>
                <Grid item>
                    <IconButton onClick={handleClick}>
                        {!button ? <UncheckedIcon /> : <CheckedIcon />}
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default ListItem;
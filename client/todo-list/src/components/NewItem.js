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
        <Grid container justify="center" alignItems="baseline">
            <h1>{button}</h1>
            <Grid item>
                <TextField
                    label="Outlined"
                    required
                    id="filled-required"
                    defaultValue="Write down task"
                    variant="filled"
                ></TextField>
            </Grid>
        </Grid>
    )
}

export default ListItem;
import React, { useState } from 'react';

import { Grid, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddItem = () => {
    return (
        <div>
            <IconButton style={{ "margin-top": "30px", "color": "white" }}>
                <Grid container alignItems="baseline" spacing={2}>
                    <Grid item>
                        <AddIcon />
                    </Grid>
                    <Grid item>
                        <span>Add item</span>
                    </Grid>
                </Grid>
            </IconButton>
        </div>
    )
}

export default AddItem;
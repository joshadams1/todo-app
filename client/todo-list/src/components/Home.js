import React from 'react';

import NewItem from './NewItem';
import AddItem from './AddItem';

import { Grid, IconButton } from '@material-ui/core';

const Home = () => {
    return (
        <Grid container justify="flex-start" direction="column">
            <Grid item>
                <h1>Welcome</h1>
            </Grid>
            <Grid item>
                <NewItem />
            </Grid>
            <Grid item>
                <AddItem />
            </Grid>
        </Grid>
    )
}

export default Home;
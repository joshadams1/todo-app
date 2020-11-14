import React, { useState } from 'react';

import NewItem from './NewItem';
import AddItem from './AddItem';

import { Grid, IconButton } from '@material-ui/core';

const Home = () => {
    const [taskList, setTaskList] = useState([]);
    return (
        <Grid container alignItems="flex-start" direction="column">
            <Grid item>
                <h1>Welcome</h1>
                <NewItem />
                <AddItem />
            </Grid>
            <Grid item>
                {/* Add list item component here */}
            </Grid>
        </Grid>
    )
}

export default Home;
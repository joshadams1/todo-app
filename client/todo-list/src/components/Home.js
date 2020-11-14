import React, { useState } from 'react';

import NewItem from './NewItem';
import ListItems from './ListItems';

import { Grid, IconButton } from '@material-ui/core';

const Home = () => {
    const [taskList, setTaskList] = useState([]);
    return (
        <Grid container alignItems="flex-start" direction="column">
            <Grid item>
                <h1>Welcome</h1>
                <NewItem setTaskList={setTaskList} taskList={taskList} />
            </Grid>
            <Grid item>
                <ListItems items={taskList} />
            </Grid>
        </Grid>
    )
}

export default Home;
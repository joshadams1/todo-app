import React, { useState } from 'react';

import NewItem from './NewItem';
import ListItems from './ListItems';

import { Grid } from '@material-ui/core';

const Home = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <div>
            <h1>Welcome</h1>
            <Grid container alignItems="baseline" justify="space-around" spacing={5}>
                <Grid item>
                    <NewItem setTaskList={setTaskList} taskList={taskList} />
                </Grid>
                <Grid item>
                    <ListItems items={taskList} setTaskList={setTaskList} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
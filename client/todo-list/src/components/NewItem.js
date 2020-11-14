import React, { useState } from 'react';
import _ from 'lodash';

import { TextField, Grid, IconButton } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';


const ListItem = (props) => {
    const [task, setTask] = useState("");
    const { taskList, setTaskList } = props;

    const handleChange = event => {
        const { value } = event.target
        setTask(value);
    }

    const addToTaskList = () => {
        // Prevent repeats tasks in task list.
        let isRepeat = _.includes(taskList, task);
        if (!isRepeat) {
            setTaskList(oldArray => [...oldArray, task]);
        } else {

        }
    }


    return (
        <Grid container justify="center" alignItems="baseline">
            <Grid item>
                <TextField
                    label="Outlined"
                    required
                    id="filled-required"
                    placeholder="Write down task"
                    variant="filled"
                    onChange={handleChange}
                ></TextField>
            </Grid>
            <Grid container justify="center">
                <IconButton style={{ "margin-top": "30px", "color": "white" }} onClick={addToTaskList}>
                    <Grid container alignItems="baseline" spacing={2}>
                        <Grid item>
                            <AddIcon />
                        </Grid>
                        <Grid item>
                            <span>Add item</span>
                        </Grid>
                    </Grid>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ListItem;
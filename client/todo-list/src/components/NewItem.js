import React, { useState } from 'react';
import _ from 'lodash';

import { TextField, Grid, Button, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import AddIcon from '@material-ui/icons/Add';


const ListItem = (props) => {
    const [task, setTask] = useState("");
    const [isRepeat, setRepeat] = useState(false);
    const { taskList, setTaskList } = props;

    const handleChange = event => {
        const { value } = event.target
        setTask(value);
    }

    const addToTaskList = () => {
        // Check for repeats in task list.
        let repeat = _.includes(taskList, task);
        if (repeat) {
            setRepeat(true)
        } else {
            setTaskList(oldArray => [...oldArray, task]);
        }
    }

    const addRepeat = () => {
        setTaskList(oldArray => [...oldArray, task]);
        setRepeat(false);
    }

    return (
        <Grid container alignItems="baseline">
            {isRepeat ?
                // Conditional rendering for repeat task alert.
                <Grid container justify="center">
                    <Grid item>
                        <Alert
                            action={
                                <Button color="inherit" size="small" onClick={addRepeat}>
                                    Add anyway?
                                </Button>
                            }
                            severity="error"
                        >
                            This task is already on your list
                    </Alert>
                    </Grid>
                </Grid>
                : ""}

            <Grid item>
                <TextField
                    label="Task"
                    required
                    id="filled-required"
                    placeholder="Write down task"
                    variant="filled"
                    onChange={handleChange}
                    defaultValue={task}
                ></TextField>
            </Grid>

            <Grid container>
                <IconButton
                    style={{ "margin-top": "30px", "color": "white" }}
                    onClick={addToTaskList}
                    disabled={task === ""}
                >
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
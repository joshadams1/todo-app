import React, { useState } from 'react';
import _ from 'lodash';

import { TextField, Grid, Button, IconButton } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';


const NewItem = props => {
    const [task, setTask] = useState("");
    const [isRepeat, setRepeat] = useState(false);
    const [open, setOpen] = React.useState(true);
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

    const handleClose = () => {
        setOpen(false);
        setRepeat(false);
    }

    return (
        <Grid container direction="column" justify="center" className="new-item-container">
            <Grid item>
                <TextField
                    label="Task"
                    required
                    id="filled-required"
                    placeholder="Write down task"
                    variant="outlined"
                    onChange={handleChange}
                    defaultValue={task}
                ></TextField>
            </Grid>
            <Grid item>
                <IconButton
                    className=""
                    onClick={addToTaskList}
                    disabled={!task.length}
                    className="add-button"
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

            {isRepeat ?
                // Conditional rendering for repeat task alert.
                <Grid item>
                    <Collapse in={open}>
                        <Alert
                            action={
                                <div>
                                    <Button color="inherit" size="small" onClick={addRepeat}>
                                        Add anyway?
                                        </Button>
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={handleClose}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                </div>
                            }
                            severity="error"
                        >
                            This task is already on your list
                            </Alert>
                    </Collapse>
                </Grid>
                : ""}
        </Grid>
    )
}

export default NewItem;
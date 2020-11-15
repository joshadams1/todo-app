import React, { useState } from 'react';
import _ from 'lodash';

import { List, ListItem, IconButton, Tabs, Tab, Box, Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import CompleteIcon from '@material-ui/icons/Done';
import PendingIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';


const ListItems = props => {
    const [completedItems, setCompletedItems] = useState([]);
    const [value, setValue] = useState(0);
    const { items, setTaskList } = props;

    /* 
       Tab panel component from Material UI documentation. 
       See "Simple Tabs" section: https://material-ui.com/components/tabs/#tabs
    */
    const TabPanel = props => {
        const { children, value, index } = props;

        return (
            <div hidden={value !== index}>
                {value === index && (
                    <Box p={3}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        );
    }

    const handleClick = (item, action) => {
        if (action === 'delete') {
            // Sets a new array without the selected item for both pending and completed.
            setTaskList(_.without(items, item));
            setCompletedItems(_.without(completedItems, item));
        } else if (action === 'completed') {
            setCompletedItems(_.concat(completedItems, item));
        } else {
            setCompletedItems(_.without(completedItems, item));
        }
    }

    const handleAlert = task => {
        let strippedCompletedList = [];
        let strippedTaskedList = [];
        let userPrompt = prompt('Please enter the new task name');

        if (!userPrompt) {
            userPrompt = prompt('You must enter a new value while editing');
        }

        // Pull out original item and replaces it.
        if (_.includes(completedItems, task)) {
            strippedCompletedList = _.without(completedItems, task);
            strippedTaskedList = _.without(items, task);

            setCompletedItems(_.concat(strippedCompletedList, userPrompt));
            setTaskList(_.concat(strippedTaskedList, userPrompt));
        } else {
            strippedTaskedList = _.without(items, task);
            setTaskList(_.concat(strippedTaskedList, userPrompt));
        }
    }

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <div>
            <h4>Tasks</h4>
            <Tabs value={value} onChange={handleChange}>
                <Tab label='All Tasks' />
                <Tab label='Pending' />
                <Tab label='Completed' />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Grid container justify="center">
                    <Grid item>
                        <List>
                            {items.map(item => {
                                return (
                                    <div hidden={!_.includes(items, item)}>
                                        <ListItem>
                                            {item}
                                            <IconButton onClick={() => handleAlert(item)}>
                                                <EditIcon />
                                            </IconButton>

                                            {/* Allows for the task to be flipped between pending and completed */}
                                            {
                                                !_.includes(completedItems, item) ?
                                                    <IconButton onClick={() => handleClick(item, 'completed')}>
                                                        <PendingIcon />
                                                    </IconButton>
                                                    : <IconButton onClick={() => handleClick(item)}>
                                                        <CompleteIcon />
                                                    </IconButton>
                                            }

                                            <IconButton onClick={() => handleClick(item, 'delete')}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItem>
                                    </div>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Grid container justify="center">
                    <Grid item>
                        <List>
                            {items.map(item => {
                                if (!_.includes(completedItems, item)) {
                                    return (
                                        <div hidden={!_.includes(items, item)}>
                                            <ListItem>
                                                {item}
                                                <IconButton onClick={() => handleAlert(item)}>
                                                    <EditIcon />
                                                </IconButton>

                                                {
                                                    !_.includes(completedItems, item) ?
                                                        <IconButton onClick={() => handleClick(item, 'completed')}>
                                                            <PendingIcon />
                                                        </IconButton>
                                                        : <IconButton onClick={() => handleClick(item)}>
                                                            <CompleteIcon />
                                                        </IconButton>
                                                }

                                                <IconButton onClick={() => handleClick(item, 'delete')}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItem>
                                        </div>
                                    )
                                }
                            })}
                        </List>
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Grid container justify="center">
                    <Grid item>
                        <List>
                            {completedItems.map(item => {
                                return (
                                    <ListItem>
                                        {item}
                                        <IconButton onClick={() => handleAlert(item)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleClick(item, 'delete')}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleClick(item)}>
                                            <CompleteIcon />
                                        </IconButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>
            </TabPanel>
        </div>
    )
}

export default ListItems;
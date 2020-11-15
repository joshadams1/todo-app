import React, { useState } from 'react';
import _ from 'lodash';

import { List, ListItem, IconButton, Tabs, Tab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CompleteIcon from '@material-ui/icons/Done';
import PendingIcon from '@material-ui/icons/RadioButtonUnchecked';

// List item component will list out all items + manage if they're done.
const ListItems = (props) => {
    const [completedItems, setCompletedItems] = useState([]);
    const { items, setTaskList } = props;

    const handleClick = (item, action) => {
        if (action === "delete") {
            setTaskList(_.without(items, item));
            setCompletedItems(_.without(completedItems, item));
        } else if (action === "completed") {
            setCompletedItems(_.concat(completedItems, item));
        } else {
            setCompletedItems(_.without(completedItems, item));
        }
    }

    return (
        <div>
            {/* Put tabs component where this h4 is */}
            <h4>Tasks</h4>
            <List>
                {items.map(item => {
                    return (
                        <div hidden={!_.includes(items, item)}>
                            <ListItem>
                                {item}
                                <IconButton onClick={() => handleClick(item, "delete")}>
                                    <DeleteIcon />
                                </IconButton>
                                {!_.includes(completedItems, item) ?
                                    <IconButton onClick={() => handleClick(item, "completed")}>
                                        <PendingIcon />
                                    </IconButton>
                                    : <IconButton onClick={() => handleClick(item)}>
                                        <CompleteIcon />
                                    </IconButton>}
                            </ListItem>
                        </div>
                    )
                })}
            </List>
        </div>
    )
}

export default ListItems;
import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// List item component will list out all items + manage if they're done.
const ListItems = (props) => {
    return (
        <div>
            <List>
                {props.items.map(item => {
                    return (<ListItem>{item}</ListItem>)
                })}
            </List>
        </div>
    )
}

export default ListItems;
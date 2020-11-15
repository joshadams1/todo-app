import React from 'react';

import { Link } from 'react-router-dom';
import { FormControl, TextField, Button } from '@material-ui/core';

const Login = () => {
    return (
        <div>
            <h1>Home</h1>
            <FormControl>
                <TextField></TextField>
                <TextField></TextField>
                <Link to="./home">
                    <Button style={{ "margin-top": "20px", "text-decoration": "none" }}
                        color="primary" variant="contained">Enter</Button>
                </Link>
            </FormControl>
        </div>
    )
}

export default Login;
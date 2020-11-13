import React from 'react';

import { FormControl, TextField, Button } from '@material-ui/core';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <FormControl>
                <TextField></TextField>
                <TextField></TextField>
                <Button>Enter</Button>
            </FormControl>
        </div>
    )
}

export default Login;
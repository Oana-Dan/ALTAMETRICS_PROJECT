import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from '../store/hook';
import { register } from '../store/auth/actionCreators';

type RegisterProps = {

}

const Register: React.FC<RegisterProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email;
        let password;
        let name;
        if(data.get('email')){
            email = data.get('email')!.toString();
        }
        if(data.get('password')){
            password = data.get('password')!.toString();
        }
        if(data.get('name')){
            name = data.get('name')!.toString();
        }
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('name'),
        });

        if(email && password && name) {
            dispatch(register(email, password, name));
            navigate('/login');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="tname"
                    label="Name"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                <NavLink to="/login" style={{color: "#1f7fce"}}>
                    Already have an account? Sign in
                </NavLink>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Container>
    );
}

export default Register;
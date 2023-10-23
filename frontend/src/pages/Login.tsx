import * as React from 'react';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hook';
import { login } from '../store/auth/actionCreators';

type LoginProps = {

}

const Login: React.FC<LoginProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email;
        let password;
        if(data.get('email')){
        email = data.get('email')!.toString();
        }
        if(data.get('password')){
        password = data.get('password')!.toString();
        }
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });

        if(email && password){
            dispatch(login(email, password))
            navigate('/')
        }
    };

    return (
        <Container component="main" maxWidth="xs">
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item>
                        <NavLink to="/register" style={{color: "#1f7fce"}}>
                        {"Don't have an account? Sign Up"}
                        </NavLink>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
  
export default Login;
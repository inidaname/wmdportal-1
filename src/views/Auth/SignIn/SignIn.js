import React from 'react';
import {withRouter } from 'react-router-dom'
import {
    makeStyles, IconButton,Box, OutlinedInput, InputLabel,Button,
    InputAdornment, FormControl, Paper, Person, Visibility, VisibilityOff
} from '../../../mui';







const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  
    }));
const  SignIn =(props) =>{
const classes = useStyles();
   const {handleForgotPassword, history} = props
    
    const [values, setValues] = React.useState({
    email: "",
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
   

  }


  return (
      <Paper elevation={0}>
                  <form onSubmit={handleSubmit}>
                    
                      <Box my={2}>
                          <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
                   <Person />
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Box>
        <Box mb={2}>
                    <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </Box>
        <div>
                          
                  
         <div style={{paddingBottom: 10}}> <Button fullWidth  color="primary" variant="contained">
                     <span style={{color: '#fff'}}>Sign In</span> 
                          </Button></div>
                          <Button  color="secondary" onClick={handleForgotPassword}> Forgot Password?</Button>  
                      </div>
          </form>
              </Paper>
  );
}

export default withRouter(SignIn);
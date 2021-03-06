import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../assets/img/logo.png';
import { Store } from '../../Store';
import './Login.scss';

import axios from '../../axios';

import {setSession} from '../../actions/actions';

function Login() {
	const { state,dispatch } = useContext(Store);

	const [values, setValues] = useState({
		name:'',
		email:'',
		passsword:''
	});

	const handleSubmit = async(e) => {
		e.preventDefault();
		console.log('nhej');
		const response= await axios.post('/user',{name:values.name,email:values.email,password:values.password});
		console.log(response.data);
		const user = {
			name: values.name,
			email: values.email,
			token: response.data
		};
		dispatch(setSession(user));
	};

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	console.log(state)

	return (
		<Grid container className="LoginContainer">
			<Grid item xs={state.mobileView?4:8} className="LeftSide"></Grid>
			<Grid item xs={state.mobileView?8:4} className="RightSide">
				<form onSubmit={handleSubmit}>
					<img alt="logo" src={logo} />
					<br />
					<br />
					<Typography variant="h6">
						LOGIN TO YOUR ACCOUNT
					</Typography>
					<TextField
						id="outlined-name"
						type="text"
						margin="normal"
						variant="outlined"
						label="Name"
						value={values.name}
						onChange={handleChange('name')}
						fullWidth
						required
					/>
					<TextField
						id="outlined-name"
						type="email"
						margin="normal"
						variant="outlined"
						label="Email"
						value={values.email}
						onChange={handleChange('email')}
						fullWidth
						required
					/>
					<TextField
						id="outlined-password-input"
						margin="normal"
						type="password"
						label="Password"
						variant="outlined"
						values={values.password}
						onChange={handleChange('password')}
						fullWidth
						required
					/>
					<br />
					<br />
					<Button type="submit" fullWidth>
						LOGIN
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}

export default Login;
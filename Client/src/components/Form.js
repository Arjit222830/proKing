import React, { useState, useEffect, useContext,Suspense, lazy } from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const Form = (props) => {

	const handleChange = (prop) => (event) => {
		props.setValues({ ...props.values, [prop]: event.target.value });
	};

	return (
		<form onSubmit={props.handleSubmit(props.values)}>
            <br />
            <br />
            <div style={{textAlign:'center'}}>
                <Typography variant="h6">
                    Form
                </Typography>
                <TextField
                    id="outlined-name"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="Name"
                    value={props.values.name}
                    onChange={handleChange('name')}
                    fullWidth
                    required
                />
                <TextField
                    id="outlined-area"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="Area"
                    value={props.values.area}
                    onChange={handleChange('area')}
                    fullWidth
                    required
                />
                <TextField
                    id="outlined-city"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="City"
                    value={props.values.city}
                    onChange={handleChange('city')}
                    fullWidth
                    required
                />
                <TextField
                    id="outlined-state"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="State"
                    value={props.values.state}
                    onChange={handleChange('state')}
                    fullWidth
                    required
                />
                <TextField
                    id="outlined-country"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="Country"
                    value={props.values.country}
                    onChange={handleChange('country')}
                    fullWidth
                    required
                />
                <br />
                <br />
                <Button type="submit" color="primary" variant="outlined">
                    Submit
                </Button>
            </div>
        </form>
	);
}

export default Form;
import React, { useState, useEffect, useContext,Suspense, lazy } from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import imgLoader from '../../assets/img/loader.gif';
import { Store } from '../../Store';

import Form from '../../components/Form';

import { addLand } from '../../actions/actions';

import axios from '../../axios';

const Add = () => {

    const { state,dispatch } = useContext(Store);

	const [values, setValues] = useState({
		name:'',
		area:'',
		city:'',
        state:'',
        country:''
	});

    const history = useHistory();

	const handleSubmit = (formValues)=> async(e) => {
		e.preventDefault();
		const response= await axios.post(`/land`, formValues,{
			headers:{
				'x-auth-token': state.session.token
			}
		});

		if(response){
			if(response.data.error){
				alert(response.data.error);
				return;
			}

			dispatch(addLand(response.data));
		}

        history.push('/');
	};

	return <Form values={values} setValues={setValues} handleSubmit={handleSubmit}/>
}

export default Add;
import React, { useState, useEffect, useContext,Suspense, lazy } from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import imgLoader from '../../assets/img/loader.gif';
import { Store } from '../../Store';
import {useParams} from 'react-router-dom';

import Form from '../../components/Form';

import { editLand } from '../../actions/actions';
import axios from '../../axios';


const Edit = () => {

    const { state,dispatch } = useContext(Store);

    const params= useParams();

    const [id,setId]= useState(null);

	const [values, setValues] = useState({
		name:'',
		area:'',
		city:'',
        state:'',
        country:''
	});

    useEffect(()=>{

        const laoding= async()=>{
            const response= await axios.get(`/land/${params.id}`,{
                headers:{
                    'x-auth-token': state.session.token
                }
            });
            console.log(response.data);
            const val= response.data;
            setValues({
                name: val.name, area: val.area, city: val.city, state: val.state, country: val.country
            });
            setId(val._id);
        }
        laoding();
    },[])

    const history = useHistory();

	const handleSubmit = (formValues)=> async(e) => {
		e.preventDefault();
        console.log(formValues);
        const response=  await axios.put(`/land/${id}`, formValues,{
            headers:{
                'x-auth-token': state.session.token
            }
        }); 

        if(response){
			if(response.data.error){
				alert(response.data.error);
				return;
            }

			dispatch(editLand(response.data));
		}

        history.push('/');
	};

	return <Form values={values} setValues={setValues} handleSubmit={handleSubmit}/>
}

export default Edit;
import React,{useState,useEffect,useContext} from 'react';
import CheckAuth from './CheckAuth';
import './App.scss';

import { Store } from './Store';
import {fetchLands, mobileView} from './actions/actions';

const App= ()=> {

	const { state,dispatch } = useContext(Store);

	const [screenWidth,setScreenWidth]= useState(window.innerWidth);

	useEffect(()=>{
		
		if(window.innerWidth>560)
			dispatch(mobileView(false));
		else
			dispatch(mobileView(true));
		
		const data= async()=>{
			var token=null;

			if(state.session){
				token= state.session.token;
				console.log(token);
			}

			dispatch(await fetchLands(token));
		}
		data();
		
	},[screenWidth,state.session]);

	console.log(state);

	window.addEventListener("resize", ()=>setScreenWidth(window.innerWidth));

	return <CheckAuth />
}

export default App;
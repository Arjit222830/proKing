import React,{useState,useEffect,useContext}from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';
import Header from '../../components/Header/Header';
import { Store } from '../../Store';
import './Home.scss';

import {mobileView} from '../../actions/actions';


const Home= () =>{

	

	return (
		<BrowserRouter>
			<Header />
			<section className="HomeContainer">
				<Routes />
			</section>
		</BrowserRouter>
	);
}

export default Home;
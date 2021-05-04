import React, { useState, useEffect, useContext,Suspense, lazy } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import './Page1.scss';
import imgLoader from '../../assets/img/loader.gif';
import { Store } from '../../Store';

const CardComponent = lazy(() => import('./CardComponent'));

function Page1() {

	const {state,dispatch}= useContext(Store);

	const loading = <div className="album-img">
		Loading..
		<img alt="loading" src={imgLoader} />
	</div>;

	if(!state.lands)
		return <>Loading...</>

	return (
		<Grid container spacing={24} justify-content={state.mobileView?'center':'start'}>
			{
				Object.values(state.lands).map((land,key) =>
					<Grid key={key} item xs={state.mobileView?10:4}>
						<Suspense fallback={loading}>
							<CardComponent data={land} />
						</Suspense>
					</Grid>
				)
			}
		</Grid>
	);
}

export default Page1;
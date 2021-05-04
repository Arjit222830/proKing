import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

import Modal from '../../components/Modal';

import {deleteLand} from '../../actions/actions'

function CardComponent(props) {
	const land = props.data;
	return (
		<Card>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="alt text"
					image="https://source.unsplash.com/random"
					title="title text"
					style={{height:'35vh'}}
				/>
				<CardContent style={{textAlign:'center'}}>
					<Typography gutterBottom>
						{land.name}
					</Typography>
					<Grid container>
						<Grid item xs={6}>
							<Link to={`/admin/edit/${land._id}`} style={{textDecoration:'none'}} >
								Edit
							</Link>
						</Grid>
						<Grid item xs={6}>
							<div onClick={(e)=> document.getElementById(`land${land._id}`).click()} style={{cursor:'pointer'}}>
								Delete
							</div>
						</Grid>	
					</Grid>
				</CardContent>
			</CardActionArea>
			<Modal id={land._id} action={deleteLand}/>
		</Card>
	);
}

export default CardComponent;
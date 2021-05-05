import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

import Modal from '../../components/Modal';

import {deleteLand} from '../../actions/actions'

function CardComponent(props) {
	const land = props.data;

	const history= useHistory();
	return (
		<Card>
			<CardActionArea>
				<CardContent style={{textAlign:'center'}}>
					<Typography variant="h5" gutterBottom>
						Land Name: {land.name}
					</Typography><br/>
					<Typography gutterBottom>
						Area: {land.area}
					</Typography>
					<Typography gutterBottom>
						City: {land.city}
					</Typography>
					<Typography gutterBottom>
						State: {land.state}
					</Typography>
					<Typography gutterBottom>
						Country: {land.country}
					</Typography>
				</CardContent>
				<CardActions style={{marginLeft:'5vw'}}>
					<Grid container>
						<Grid item xs={6}>
							<Button size="small" color="primary" onClick={()=> history.push(`/admin/edit/${land._id}`)}>
								Edit
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button size="small" color="primary" onClick={(e)=> document.getElementById(`land${land._id}`).click()} style={{cursor:'pointer'}}>
								Delete
							</Button>
						</Grid>	
					</Grid>
     			 </CardActions>
			</CardActionArea>
			<Modal id={land._id} action={deleteLand}/>
		</Card>
	);
}

export default CardComponent;
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

import { Context } from './Header';
import { Link } from 'react-router-dom';

function LeftDrawer() {
	return (
		<Context.Consumer>
			{({ openLeftDrawer, setOpenLeftDrawer }) => (
				<Drawer open={openLeftDrawer} onClose={() => setOpenLeftDrawer(false)}>
					<div
						tabIndex={0}
						role="button"
						onClick={() => setOpenLeftDrawer(false)}
						onKeyDown={() => setOpenLeftDrawer(false)}
					>
						<div>
							<List>
								<Link to={'/'} style={{ textDecoration: 'none' }}>
									<ListItem button>
										<ListItemIcon><HomeIcon /></ListItemIcon>
										<ListItemText primary={'Home'} />
									</ListItem>
								</Link>
								<Link to={'/admin/add'} style={{ textDecoration: 'none' }}>
									<ListItem button>
										<ListItemIcon><PersonIcon /></ListItemIcon>
										<ListItemText primary={'Add Land'} />
									</ListItem>
								</Link>
							</List>
						</div>
					</div>
				</Drawer>
			)}
		</Context.Consumer>
	);
}

export default LeftDrawer;
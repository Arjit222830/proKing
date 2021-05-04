import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';

import Add from './containers/Admin/Add';
import Edit from './containers/Admin/Edit';
import Page404 from './components/Page404/Page404';
import Page1 from './containers/Page1/Page1';
import Page2 from './containers/Page2/Page2';

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Page1} />
			<Route path="/page1" exact component={Page1} />
			<Route path="/page2" exact component={Page2} />
			<Route path="/admin/add" exact component={Add} />
			<Route path="/admin/edit/:id" exact component={Edit} />
			<Route component={Page404} />
		</Switch>
	);
}

export default Routes;
import React from 'react';

import { Switch, Route, NavLink } from "react-router-dom";
import CreateUser from './components/Form/CreateUser';
import UpdateUser from './components/Form/UpdateUser';

import UserList from './components/UserList/UserList';

import './styles.scss';

function App() {
	return (
		<div className="app layout">
			<aside>
				<header> <div className="logo" /> </header>
				<nav>
					<ul>
						<li>
							<NavLink to="/" activeClassName="active" exact>User List</NavLink>
						</li>
						<li>
							<NavLink to="/users/create" activeClassName="active">Create User</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
			<main>
				<header className="page-title">
					<h1>Users</h1>
				</header>
				<Switch>
					<Route exact path="/" component={UserList} />
					<Route exact path="/users/create" component={CreateUser} />
					<Route exact path="/users/update/:id" component={UpdateUser} />
				</Switch>
			</main>
		</div>
	);
}

export default React.memo(App);

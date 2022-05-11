import React from "react";
import { useSelector } from "react-redux";
import User from "../User/User";
import "./_user-list.scss";

const UserList = () => {
	const users = useSelector(store => store);
	return (
		<section>
			<h2>User list</h2>
			<div className="header-table">
				<ul>
					<li>Name</li>
					<li>Email</li>
					<li>Phone</li>
					<li>Country</li>
					<li><center>Actions</center></li>
				</ul>
			</div>
			<ul className="user-list">
				{users.map((user) => (
					<li key={user.id}>
						<User user={user} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default UserList;
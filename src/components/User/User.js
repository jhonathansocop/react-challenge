import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../reducers/userReducer";
import "./User.scss";

const User = ({ user }) => {
	const dispatch  = useDispatch();

	const btnDeleteClick = () => {		
		var userInfo = `${user.name} (${user.email})`; // Use string interpolation to generate the user info value.
		var confirmationMessage = `Are you sure you want to delete ${userInfo} user?`;

		// Confirm the delete action with the user first.
		if (window.confirm(confirmationMessage))
		{
			dispatch(deleteUser(user));
		}
	}

	return (
		<div className="product">
			<span>{user.name}</span>
			<span>{user.email}</span>
			<span>+{user.phone}</span>
			<span>{user.country}</span>
			<span>				
				<Link to={"/users/update/" + user.id} className="btn btn-warning">Update </Link> { " | " }				
				<button className="btn btn-danger" onClick={btnDeleteClick}>Delete</button>
			</span>
		</div>
	);
};

export default User;
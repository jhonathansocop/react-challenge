import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import uuid from "react-uuid";
import { createUser } from "../../reducers/userReducer";
import UserForm from "./UserForm";

const CreateUser = () => {
	const dispatch = useDispatch();
	const navigate = useHistory();

	const submitCreateUser = (user) => {
		var userToCreate = {
			...user,
			id: uuid() // For the new user we need to set a new unique identifier before save it.
		};

		dispatch(createUser(userToCreate));
		navigate.push("/");
	}

	return (
		<UserForm handleParentSubmit={submitCreateUser} />
	)
}

export default CreateUser;
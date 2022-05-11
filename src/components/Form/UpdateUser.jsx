import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import { updateUser } from "../../reducers/userReducer";
import UserForm from "./UserForm";

const CreateUser = () => {
    const users = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useHistory();
    const { id } = useParams();
    const selectedUser = users.find(user => user.id == id);

    const submitCreateUser = (user) => {
        var userToCreate = {
            ...user,
            id // For the update user, we need to use the same unique identifier.
        };

        dispatch(updateUser(userToCreate));
        navigate.push("/");
    }

    return (
        <UserForm handleParentSubmit={submitCreateUser} updateUser={selectedUser} />
    )
}

export default CreateUser;
import uuid from "react-uuid"; // Package to enerate unique ids.

// Use constant for the local storage key.
// It will be useful if the name change in the future, it will be enough just
// update this value instead of search the string in the whole project.
const USERS_KEY = "userList";

//Default users, it will be used when there is no values on local storage
const DEFAULT_USERS = [
	{ id: uuid(), name: "Juan", email: "arg@gmail.com", phone: "5432423413", country: "AR" },
	{ id: uuid(), name: "Leao", email: "salsa@gmail.com", phone: "5336724215", country: "BR" },
	{ id: uuid(), name: "Elpidio", email: "boliv@gmail.com", phone: "1456754324", country: "BO" },
	{ id: uuid(), name: "Michelle", email: "cl@gmail.com", phone: "2245467543", country: "CL" },
	{ id: uuid(), name: "Jhonathan", email: "jhonathan@gmail.com", phone: "2312312312", country: "GT" },
];

/**
 * Check if the local storage key exist and contains a valid value, if not, 
 * returns the value of DEFAULT_USERS constant.
 * @returns Default users to use.
 */
const getDefaultUsers = () => {
	try {
		var localStorageValue = window.localStorage.getItem(USERS_KEY);
		return localStorageValue ? JSON.parse(localStorageValue) : DEFAULT_USERS;
	}
	catch {
		console.log("Error at the moment to read the value from local storage");
		return DEFAULT_USERS;
	}
}

export function userReducer(state = getDefaultUsers(), action) {
	var newState = state;
	switch (action.type) {
		case "@user/create":
			// Add the user to the existing list
			newState = [...state, action.payload];
			break;
		case "@user/update":
			// Update the user in the list
			newState = state.map((user) => {
				var theUser = user;
				if (user.id == action.payload.id) {
					theUser = { ...action.payload };
				}
				return theUser;
			});
			break;
		case "@user/delete":
			// Delete the user in the list
			newState = state.filter((user) => user.id != action.payload.id);
			break;
		default:
			break;
	}

	// Store the latest state in local storage to persist data with browser refresh.
	window.localStorage.setItem(USERS_KEY, JSON.stringify(newState));
	return newState;
}

/**
 * Creates the action object to use in dispatch
 * @param {user} user object to save
 * @returns Create action object.
 */
export function createUser(user) {
	return {
		type: "@user/create",
		payload: user
	}
}

/**
 * Creates the action object to use in dispatch
 * @param {user} user object to update
 * @returns Update action object.
 */
export function updateUser(user) {
	return {
		type: "@user/update",
		payload: user
	}
}

/**
 * Creates the action object to use in dispatch
 * @param {user} user object to delete
 * @returns Delete action object.
 */
export function deleteUser(user) {
	return {
		type: "@user/delete",
		payload: user
	}
}
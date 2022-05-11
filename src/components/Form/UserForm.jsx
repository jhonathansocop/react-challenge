import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components.scss";

const UserForm = ({ handleParentSubmit, updateUser }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [errors, setErrors] = useState({ name: "", email: "", phone: "", country: "" });

	// RegexPatters for validations 
	var phoneNumberPattern = new RegExp("^[0-9]{10}$");
	var emailPattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");

	// Execute effect once, just to populate the data if the updateUser object is not null.
	useEffect(() => {
		if (updateUser) // Check if it is on edit mode.
		{
			setName(updateUser.name);
			setEmail(updateUser.email);
			setPhone(updateUser.phone);
			setCountry(updateUser.country);
			setErrors({});
		}
	}, []);

	/**
	 * Submit form event handler	 
	 */
	const submitUserForm = (e) => {
		e.preventDefault();
		validateFormOnSubmit();

		const isEmptyErrors = JSON.stringify(errors) == "{}";
		if (isEmptyErrors) { // Save if there are no errors.

			// Use string interpolation to generate the text to log on the console
			// just for debug porpose
			var userInfo = `DEBUG::: \nname: ${name} \nemail: ${email} \nphone: ${phone} \nCountry: ${country}`;
			console.log(userInfo);

			var userObject = {
				name,
				email,
				phone,
				country
			};

			handleParentSubmit(userObject);
		}
	}

	/**
	 * Validate all the form inputs on submit action.
	 */
	const validateFormOnSubmit = () => {
		// Create the fields list in order to do not duplicate code
		// Validations will be generated dinamically
		var fieldList = ["name", "email", "phone", "country"];
		var newErrors = { ...errors };

		fieldList.forEach(fieldName => {
			let fieldValue = eval(fieldName);
			if (fieldValue.length == 0) {
				newErrors = {
					...newErrors,
					[fieldName]: `The ${fieldName} field is required.`
				};
			}
			else {
				if (fieldName == "email" && !emailPattern.test(email)) {
					newErrors = { 
						...newErrors, 
						email: `Invalid email.` 
					};
				} else if (fieldName == "phone" && !phoneNumberPattern.test(phone)) {
					newErrors = { 
						...newErrors, 
						phone: `The phone field must have 10 digits.` 
					};
				}
				else {					
					newErrors[[fieldName]] = undefined;
				}
			}
		});
		setErrors(newErrors);
	}

	/**
	 * Custom Error Handler, it will validate the form fields when the input lose focus.
	 * @param {*} e | Element that fires the event
	 */
	const handleInputBlur = (e) => {
		if (!e.target.value) { // All form fields are required			
			setErrors({
				...errors,
				[e.target.name]: `The ${e.target.name} field is required.`
			});
		}
		else {			
			if (e.target.name == "email" && !emailPattern.test(e.target.value)) {
				setErrors({
					...errors,
					[e.target.name]: `Invalid email.`
				});				
			} else if (e.target.name == "phone" && !phoneNumberPattern.test(e.target.value)) {
				setErrors({
					...errors,
					[e.target.name]: `The phone field must have 10 digits.`
				});				
			}
			else {				
				var newErrors = { ...errors };
				newErrors[e.target.name] = undefined;
				setErrors(newErrors);
			}			
		}		
	}

	return (
		<div className="centered">
			<h2>{updateUser ? "Update" : "Create"} User</h2>			

			<form onSubmit={submitUserForm}>
				<div>
					<label htmlFor="name" className="label">Name</label>
					<input placeholder="Name" name="name" id="name" type="text"
						value={name}
						onChange={(e) => { setName(e.target.value); handleInputBlur(e); }}
						onBlur={handleInputBlur} />
						{errors?.name && <small className="text-danger">{errors.name}</small>}
					<br />

					<label htmlFor="email" className="label">Email</label>
					<input placeholder="Email" name="email" id="email" type="text"
						value={email}
						onChange={(e) => { setEmail(e.target.value); handleInputBlur(e); }}
						onBlur={handleInputBlur} />
						{errors?.email && <small className="text-danger">{errors.email}</small>}
					<br />

					<label htmlFor="phone" className="label">Phone</label>
					<input placeholder="Phone" name="phone" id="phone" type="number"
						value={phone}
						onChange={(e) => { setPhone(e.target.value); handleInputBlur(e); }}
						onBlur={handleInputBlur} />
						{errors?.phone && <small className="text-danger">{errors.phone}</small>}
					<br />

					<label htmlFor="country" className="label">Country</label>
					<input placeholder="Country" name="country" id="country" type="text"
						value={country}
						onChange={(e) => { setCountry(e.target.value); handleInputBlur(e); }}
						onBlur={handleInputBlur} />
						{errors?.country && <small className="text-danger">{errors.country}</small>}
					<br />
					<br />

					<Link to="/" className="btn btn-danger">Cancel</Link> {" | "}
					<button type="submit" className="btn btn-primary">{updateUser ? "Update" : "Save"}</button>
				</div>
			</form>
		</div>
	);
}

export default UserForm;
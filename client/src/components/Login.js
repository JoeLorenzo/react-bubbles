import React, { useState } from "react";
import axios from "axios"
const Login = (props) => {
	const [data, setData] = useState({
		username: "",
		password: "",
	})

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
        axios
        .post(`http://localhost:5000/api/login`, data)
        .then(response => {
            console.log(data)
        localStorage.setItem("token", response.data.payload)
			})
	    .catch(error => {
                console.log(error);
			})
	}

	return (
		<form onSubmit={handleSubmit}>

			<input type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

			<button type="submit">Log-in</button>
		</form>
	)
};

export default Login;

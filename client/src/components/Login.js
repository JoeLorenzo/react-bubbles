import React, { useState } from "react";
import axios from "axios"
import api from '../utils/api';
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
		console.log(data)
		event.preventDefault();
        api().post(`/api/login`, data)
        .then(response => {
			console.log(response.data.payload)
        localStorage.setItem("token", response.status.payload)
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

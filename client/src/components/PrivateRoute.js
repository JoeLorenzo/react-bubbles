import React from "react"
import { Route, Redirect } from "react-router-dom"

function PrivateRoute(props) {
	const {
		component: Component,
		...rest
	} = props

	return (

		<Route {...rest} render={(renderProps) => {
			if (localStorage.getItem("token")) {
				return <Component {...renderProps} />
			} else {
				// We are not logged in, so redirect to the login page
				return <Redirect to="/" />
			}
		}} />
	)
}

export default PrivateRoute
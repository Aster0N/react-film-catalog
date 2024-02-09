import AuthContext from '@/context/AuthContext'
import { privateRoutes, publicRoutes } from '@/router/index.js'
import UserService from '@/services/UserService'
import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
	const { isAuth, setIsAuth, setUser } = useContext(AuthContext)

	useEffect(() => {
		const tokens = JSON.parse(localStorage.getItem('tokens'))
		if (!tokens) {
			console.log("logged out")
			return
		}
		console.log("logged in")
		setIsAuth(true)
		const getUserData = async () => {
			const user = await UserService.getUserData(tokens.accessToken)
			return user
		}
		const user = getUserData()
		setUser(user)
		// TODO redirect user to online-cinema page
	}, [])

	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				)}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			:
			<Routes>
				{publicRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				)}
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
	)
}

export default AppRouter
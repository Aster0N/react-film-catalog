import AuthContext from '@/context/AuthContext'
import { privateRoutes, publicRoutes } from '@/router/index.js'
import UserService from '@/services/UserService'
import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const AppRouter = () => {
	const { isAuth, setIsAuth, setUser } = useContext(AuthContext)
	const navigate = useNavigate()

	const setUserData = async (tokens) => {
		const response = await UserService.getUserData(tokens.accessToken)
		// ! User doesn't sets properly
		setUser(response.user)
	}

	useEffect(() => {
		const tokens = JSON.parse(localStorage.getItem('tokens'))
		if (!tokens) {
			console.log("logged out")
			return
		}
		console.log("logged in")
		setIsAuth(true)

		setUserData(tokens)

		navigate("/online-cinema")
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
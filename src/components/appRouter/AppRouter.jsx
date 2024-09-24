import AuthContext from '@/context/AuthContext'
import { privateRoutes, publicRoutes } from '@/router/index.js'
import UserService from '@/services/UserService'
import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const AppRouter = () => {
	const { isAuth, setIsAuth, setUser } = useContext(AuthContext)
	const navigate = useNavigate()

	const setUserInfo = async (tokens) => {
		let userResponse = await UserService.getUserData(tokens.accessToken)

		if (userResponse.error == "INVALID_ID_TOKEN" || userResponse.user == null) {
			const refreshTokenResponse = await UserService.refreshToken(tokens.refreshToken)
			if (!refreshTokenResponse.error) {
				userResponse = await UserService.getUserData(tokens.accessToken)
			}
		}

		console.log(userResponse)
		setUser(userResponse.user)
	}

	useEffect(() => {
		const tokens = JSON.parse(localStorage.getItem('tokens'))
		if (!tokens) {
			console.log("logged out")
			return
		}
		console.log("logged in")
		setIsAuth(true)

		setUserInfo(tokens)

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
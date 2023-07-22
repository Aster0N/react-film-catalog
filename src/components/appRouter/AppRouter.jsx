import AuthContext from '@/context/AuthContext'
import { privateRoutes, publicRoutes } from '@/router/index.js'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
	const { isAuth } = useContext(AuthContext)

	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={<route.element />}
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
						element={<route.element />}
					/>
				)}
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
	)
}

export default AppRouter
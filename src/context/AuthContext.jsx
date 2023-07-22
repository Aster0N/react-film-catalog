import { createContext, useState } from "react"
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isAuth, setIsAuth] = useState(false)

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				isAuth,
				setIsAuth
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
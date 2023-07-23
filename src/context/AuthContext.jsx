import { createContext, useState } from "react"
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				isAuth,
				setIsAuth,
				isLoading,
				setIsLoading
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
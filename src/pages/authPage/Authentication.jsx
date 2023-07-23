import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import Loader from '@/components/UI/loader/Loader.jsx'
import AuthForm from '@/components/authForm/AuthForm.jsx'
import AuthContext from '@/context/AuthContext.jsx'
import UserService from '@/services/UserService.js'
import { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true)
	const { setUser, setIsAuth, isLoading, setIsLoading } = useContext(AuthContext)
	const navigate = useNavigate()

	const signUp = async ({ userEmail, userPassword }) => {
		setIsLoading(true)
		const registeredUser = await UserService.signUp({ userEmail, userPassword })
		setIsLoading(false)
		setUser(registeredUser)
		setIsAuth(true)
		navigate('/online-cinema')
	}

	const logIn = async ({ userEmail, userPassword }) => {
		setIsLoading(true)
		const loggedInUser = await UserService.logIn({ userEmail, userPassword })
		setIsLoading(false)
		setUser(loggedInUser)
		setIsAuth(true)
		navigate('/online-cinema')
	}

	return (
		<div className="_page">
			<div className="_wrapper">
				<Link to=".." className={classes.backLink}>
					<img src={shortLeftArrow} alt="go back" />
					<span className={classes.backLinkCaption}>go back</span>
				</Link>
				{isLoading
					? <Loader />
					: <AuthForm
						auth={isLogin ? logIn : signUp}
						isLogin={isLogin}
						changeForm={() => setIsLogin(!isLogin)}
					/>
				}

			</div>
		</div>
	)
}

export default Authentication
import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import AuthForm from '@/components/authForm/AuthForm.jsx'
import AuthContext from '@/context/AuthContext.jsx'
import UserService from '@/services/UserService.js'
import { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true)
	const { setUser, setIsAuth } = useContext(AuthContext)

	const signUp = async ({ userEmail, userPassword }) => {
		const registeredUser = await UserService.signUp({ userEmail, userPassword })
		setUser(registeredUser)
		setIsAuth(true)
	}

	const logIn = async ({ userEmail, userPassword }) => {
		const loggedInUser = await UserService.logIn({ userEmail, userPassword })
		setUser(loggedInUser)
		setIsAuth(true)
	}

	return (
		<div className="_page">
			<div className="_wrapper">
				<Link to=".." className={classes.backLink}>
					<img src={shortLeftArrow} alt="go back" />
					<span className={classes.backLinkCaption}>go back</span>
				</Link>
				<AuthForm
					auth={isLogin ? logIn : signUp}
					isLogin={isLogin}
					changeForm={() => setIsLogin(!isLogin)}
				/>
			</div>
		</div>
	)
}

export default Authentication
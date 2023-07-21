import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import AuthForm from '@/components/authForm/AuthForm.jsx'
import UserService from '@/services/UserService.js'
import { useState } from 'react'
import { Link } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [user, setUser] = useState(null)

	const signUp = async ({ userEmail, userPassword }) => {
		const registeredUser = await UserService.signUp({ userEmail, userPassword })
		setUser(registeredUser)
	}

	const logIn = async ({ userEmail, userPassword }) => {
		const loggedInUser = await UserService.logIn({ userEmail, userPassword })
		setUser(loggedInUser)
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
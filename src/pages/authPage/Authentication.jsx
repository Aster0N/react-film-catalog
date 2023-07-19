import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import AuthForm from '@/components/authForm/AuthForm.jsx'
import { auth } from '@/config/firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react'
import { Link } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [user, setUser] = useState(null)

	const logIn = () => {
		console.log('log in')
	}

	const signUp = async ({ userEmail, userPassword }) => {
		await createUserWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				const user = userCredential.user
				setUser(user)
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				console.error(errorCode, errorMessage)
			})
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
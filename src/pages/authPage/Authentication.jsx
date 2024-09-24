import starLightEmpty from '@/assets/img/star-light-empty.svg'
import Loader from '@/components/UI/loader/Loader.jsx'
import AuthForm from '@/components/authForm/AuthForm.jsx'
import pageAnimation from '@/components/pageAnimation.jsx'
import AuthContext from '@/context/AuthContext.jsx'
import UserService from '@/services/UserService.js'
import { useContext, useState, user } from 'react'
import { Link, useNavigate } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [authError, setAuthError] = useState('')
	const { setUser, setIsAuth, isLoading, setIsLoading } = useContext(AuthContext)
	const navigate = useNavigate()

	const signUp = async ({ userEmail, userPassword }) => {
		setIsLoading(true)
		const response = await UserService.signUp({ userEmail, userPassword })
		if (response.error || response.user == null) {
			setAuthError(response.error)
			setIsLoading(false)
			return
		}

		setUser(response.user)
		setIsAuth(true)
		try {
			await UserService.addNewUser(response.user)
		} catch (err) {
			setAuthError(`Add user error: ${err.message}`)
			return
		} finally {
			setIsLoading(false)
		}
		console.log(`AUTH user: ${user}`)
		navigate('/online-cinema')
	}

	const logIn = async ({ userEmail, userPassword }) => {
		setIsLoading(true)
		const response = await UserService.logIn({ userEmail, userPassword })
		setIsLoading(false)

		if (response.error) {
			setAuthError(response.error)
			return
		}

		setUser(response.user)
		setIsAuth(true)
		navigate('/online-cinema')
	}

	return (
		<div className="_page">
			<div className="_wrapper">
				<Link to=".." className={classes.backLink}>
					<span className={classes.backLinkCaption}>go back</span>
					<img src={starLightEmpty} alt="star" />
				</Link>
				{isLoading
					? <Loader />
					: <AuthForm
						auth={isLogin ? logIn : signUp}
						isLogin={isLogin}
						authError={authError}
						removeAuthError={() => setAuthError('')}
						changeForm={() => setIsLogin(!isLogin)}
					/>
				}
			</div>
		</div>
	)
}

export default pageAnimation(Authentication)
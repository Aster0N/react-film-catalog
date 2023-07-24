import cross from '@/assets/img/cross.svg'
import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import { useState } from 'react'
import classes from './AuthForm.module.css'

const AuthForm = ({ isLogin, changeForm, auth, authError, removeAuthError }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userPasswordConfirm, setUserPasswordConfirm] = useState('')

	const togglePassword = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	const handleAuth = (e) => {
		e.preventDefault()
		auth({ userEmail, userPassword })
	}

	return (
		<form
			onSubmit={handleAuth}
			className={classes.loginForm}
		>
			<h1 className={classes.formTitle}>{isLogin ? 'Login' : 'Register'}</h1>
			<MyInput
				onChange={(e) => setUserEmail(e.target.value)}
				inputPlaceholder='Your email'
				inputType="email"
			/>
			<MyInput
				onChange={(e) => setUserPassword(e.target.value)}
				togglePassword={togglePassword}
				className={isPasswordVisible ? classes.showPassword_active : ''}
				inputPlaceholder='Your password'
				inputType={isPasswordVisible ? 'text' : 'password'}
				isPasswordInput
			/>
			{!isLogin &&
				<MyInput
					onChange={(e) => setUserPasswordConfirm(e.target.value)}
					togglePassword={togglePassword}
					className={isPasswordVisible ? classes.showPassword_active : ''}
					inputPlaceholder='Repeat the password'
					inputType={isPasswordVisible ? 'text' : 'password'}
					isPasswordInput
				/>
			}
			<MyButton type="submit" className={classes.submitBtn}>
				{isLogin ? 'log in' : 'submit'}
			</MyButton>
			<div>
				<span>{isLogin ? 'Not a member?' : 'Already have an account?'}</span>&nbsp;
				<span
					onClick={changeForm}
					className={classes.changeFormLink}
				>
					{isLogin ? 'Sign up' : 'Sign in'}
				</span>
			</div>
			{authError &&
				<div className={classes.errorBlock}>
					<button className={classes.removeAuthErrorBtn} onClick={removeAuthError}>
						<img src={cross} alt="close" />
					</button>
					<span>{authError}</span>
				</div>
			}
		</form>
	)
}

export default AuthForm
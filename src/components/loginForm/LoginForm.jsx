import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import { useState } from 'react'
import classes from './LoginForm.module.css'

const LoginForm = ({ isLogin, changeForm }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePassword = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	return (
		<form className={classes.loginForm}>
			<h1 className={classes.formTitle}>{isLogin ? 'Login' : 'Register'}</h1>
			<MyInput
				inputPlaceholder='Your email'
				inputType="email"
			/>
			<MyInput
				togglePassword={togglePassword}
				inputPlaceholder='Your password'
				inputType={isPasswordVisible ? 'text' : 'password'}
				isPasswordInput
			/>
			{!isLogin &&
				<MyInput
					togglePassword={togglePassword}
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
		</form>
	)
}

export default LoginForm
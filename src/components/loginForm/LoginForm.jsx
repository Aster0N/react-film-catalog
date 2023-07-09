import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import { useState } from 'react'
import classes from './LoginForm.module.css'

const LoginForm = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePassword = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	return (
		<form className={classes.loginForm}>
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
			<MyButton type="submit" className={classes.loginBtn}>login</MyButton>
			<div>
				<span>Not a member?</span>&nbsp;
				<span
					className={classes.registrationLink}
				>Sign up</span>
			</div>
		</form>
	)
}

export default LoginForm
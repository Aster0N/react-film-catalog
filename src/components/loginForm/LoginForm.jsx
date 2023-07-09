import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import { useState } from 'react'
import classes from './LoginForm.module.css'

const LoginForm = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	return (
		<form className={classes.loginForm}>
			<MyInput
				inputPlaceholder='Your email'
				inputType="email"
			/>
			<MyInput
				inputPlaceholder='Your password'
				inputType={isPasswordVisible ? 'text' : 'password'}
			/>
			<span
				onClick={() => setIsPasswordVisible(!isPasswordVisible)}
				className={classes.showPassword}
			></span>
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
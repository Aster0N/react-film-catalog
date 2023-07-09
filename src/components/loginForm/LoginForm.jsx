import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
				<Link className={classes.registrationLink} to="/registration">Sign up</Link>
			</div>
		</form>
	)
}

export default LoginForm
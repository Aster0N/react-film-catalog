import MyButton from '@/components/UI/button/MyButton.jsx'
import classes from './LoginForm.module.css'

const LoginForm = () => {
	return (
		<div className={classes.loginForm}>
			<label htmlFor="email">
				Email<br />
				<input placeholder='Your email' id="email" type="email" />
			</label>
			<label htmlFor="password">
				Password<br />
				<input placeholder='Your password' id="password" type="password" />
			</label>
			<MyButton>login</MyButton>
		</div>
	)
}

export default LoginForm
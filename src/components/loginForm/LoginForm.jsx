import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import classes from './LoginForm.module.css'

const LoginForm = () => {
	return (
		<div className={classes.loginForm}>
			<MyInput
				labelFor={"email"}
				labelText={"Email"}
				inputPlaceholder='Your email'
				inputId="email"
				inputType="email"
			/>
			<MyInput
				labelFor={"password"}
				labelText={"Password"}
				inputPlaceholder='Your password'
				inputId="password"
				inputType="password"
			/>
			<MyButton className={classes.loginBtn}>login</MyButton>
		</div>
	)
}

export default LoginForm
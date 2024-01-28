import cross from '@/assets/img/cross.svg'
import MyButton from '@/components/UI/button/MyButton.jsx'
import MyInput from '@/components/UI/input/MyInput'
import WarningMessage from '@/components/UI/warningMessage/WarningMessage'
import { useInputValidation } from '@/hooks/useInputValidation'
import { useState } from 'react'
import classes from './AuthForm.module.css'

const AuthForm = ({ isLogin, changeForm, auth, authError, removeAuthError }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const [userPasswordConfirm, setUserPasswordConfirm] = useState('')
	const userEmail = useInputValidation('', { checkIsEmail: true })
	const userPassword = useInputValidation('', { checkMinLength: 8, checkIsPassword: !isLogin })

	const togglePassword = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	const handleAuth = (e) => {
		e.preventDefault()
		auth({ userEmail: userEmail.value, userPassword: userPassword.value })
	}

	const showEmailError = () => {
		return (!userEmail.isEmail.valid && userEmail.isDirty)
	}
	const showPasswordError = () => {
		return (!userPassword.isPassword.valid && userPassword.isDirty && !isLogin)
	}
	const showPasswordLengthError = () => {
		return (!userPassword.isNormalLength.valid && userPassword.isDirty)
	}
	const showPasswordConfirmationError = () => {
		return (!isLogin && userPassword.isDirty && (userPasswordConfirm !== userPassword.value || !userPasswordConfirm))
	}
	const disableSubmitButton = () => {
		return showEmailError() || showPasswordError() || showPasswordLengthError() || showPasswordConfirmationError()
	}

	return (
		<form
			onSubmit={handleAuth}
			className={classes.loginForm}
		>
			<h1 className={classes.formTitle}>{isLogin ? 'Login' : 'Register'}</h1>
			<MyInput
				value={userEmail.value}
				onChange={userEmail.onChange}
				onBlur={userEmail.onBlur}
				inputPlaceholder='Your email'
				inputType="email"
			/>
			{showEmailError()
				&& <WarningMessage>{userEmail.isEmail.error}</WarningMessage>
			}
			<MyInput
				value={userPassword.value}
				onChange={userPassword.onChange}
				onBlur={userPassword.onBlur}
				togglePassword={togglePassword}
				className={isPasswordVisible ? classes.showPassword_active : ''}
				inputPlaceholder='Your password'
				inputType={isPasswordVisible ? 'text' : 'password'}
				isPasswordInput
			/>
			{showPasswordLengthError()
				&& <WarningMessage>{userPassword.isNormalLength.error}</WarningMessage>
			}
			{showPasswordError()
				&& <WarningMessage>{userPassword.isPassword.error}</WarningMessage>
			}
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
			{showPasswordConfirmationError()
				&& <WarningMessage>Invalid password</WarningMessage>
			}
			<MyButton type="submit" disabled={disableSubmitButton()} className={classes.submitBtn}>
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
		</form >
	)
}

export default AuthForm
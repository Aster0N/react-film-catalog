import classes from './MyInput.module.css'

const MyInput = ({ inputPlaceholder, inputType, togglePassword, ...props }) => {
	return (
		<div className={classes.inputWrapper}>
			<input
				placeholder={inputPlaceholder}
				type={inputType}
				className={[classes.myInput, props?.className].join(' ')}
			/>
			{props.isPasswordInput
				?
				<span
					onClick={() => togglePassword()}
					className={classes.showPassword}
				></span>
				: <></>
			}
		</div>
	)
}

export default MyInput
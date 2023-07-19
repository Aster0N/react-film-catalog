import classes from './MyInput.module.css'

const MyInput = ({ inputPlaceholder, inputType, togglePassword, isPasswordInput, ...props }) => {
	return (
		<div className={classes.inputWrapper}>
			<input
				{...props}
				placeholder={inputPlaceholder}
				type={inputType}
				className={[classes.myInput, props?.className].join(' ')}
			/>
			{isPasswordInput
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
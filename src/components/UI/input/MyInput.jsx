import classes from './MyInput.module.css'

const MyInput = ({ inputPlaceholder, inputType, togglePassword, isPasswordInput, ...props }) => {
	return (
		<div className={classes.inputWrapper}>
			<input
				{...props}
				placeholder={inputPlaceholder}
				type={inputType}
				className={classes.myInput}
			/>
			{isPasswordInput
				?
				<span
					onClick={() => togglePassword()}
					className={[classes.showPassword, props?.className].join(' ')}
				></span>
				: <></>
			}
		</div>
	)
}

export default MyInput
import classes from './MyInput.module.css'

const MyInput = ({ labelFor, labelText, inputPlaceholder, inputId, inputType }) => {
	return (
		<label className={classes.label} htmlFor={labelFor}>
			{labelText}<br />
			<input
				placeholder={inputPlaceholder}
				id={inputId}
				type={inputType}
				className={classes.myInput}
			/>
		</label>

	)
}

export default MyInput
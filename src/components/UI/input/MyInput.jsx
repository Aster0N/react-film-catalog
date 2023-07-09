import classes from './MyInput.module.css'

const MyInput = ({ inputPlaceholder, inputType, ...props }) => {
	return (
		<input
			placeholder={inputPlaceholder}
			type={inputType}
			className={[classes.myInput, props?.className].join(' ')}
		/>
	)
}

export default MyInput
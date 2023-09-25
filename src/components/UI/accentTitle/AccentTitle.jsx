import classes from './AccentTitle.module.css'

const AccentTitle = ({ children, ...props }) => {
	return (
		<h2 className={[classes.accentTitle, props?.className].join(' ')}>
			{children}
		</h2>
	)
}

export default AccentTitle
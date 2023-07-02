import classes from './AccentTitle.module.css'

const AccentTitle = ({ children }) => {
	return (
		<h2 className={classes.accentTitle}>
			{children}
		</h2>
	)
}

export default AccentTitle
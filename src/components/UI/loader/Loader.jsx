import classes from './Loader.module.css'

const Loader = () => {
	return (
		<div className={classes.loaderWrapper}>
			<span className={classes.loaderCaption}>loading</span>
			<div className={classes.loaderLine}></div>
		</div>
	)
}

export default Loader
import classes from './Loader.module.css'

const Loader = () => {
	return (
		<div className={classes.loaderWrapper}>
			<span className={classes.loaderStar}></span>
			<span className={classes.loaderCaption}>loading</span>
			<span className={classes.loaderStar}></span>
		</div>
	)
}

export default Loader
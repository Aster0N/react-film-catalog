import classes from './Burger.module.css'

const Burger = ({ showMenu }) => {
	return (
		<button
			className={classes.burger}
			onClick={showMenu}
		>
			<div className={classes.lines}>
				<div className={[classes.linesWrapper, classes.linesWrapper1].join(' ')}>
					<span className={classes.line}></span>
					<span className={classes.line}></span>
				</div>
				<div className={[classes.linesWrapper, classes.linesWrapper2].join(' ')}>
					<span className={classes.line}></span>
					<span className={classes.line}></span>
				</div>
			</div>
		</button>
	)
}

export default Burger
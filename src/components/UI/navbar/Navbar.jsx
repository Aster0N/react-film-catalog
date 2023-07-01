import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div
				className={[classes.navbarContent, '_wrapper'].join(' ')}
			>
				<div className={classes.logo}></div>
				<div className={classes.links}>
					links
				</div>
			</div>
		</div>
	)
}

export default Navbar
import logo from "@/assets/img/dark-logo.svg"
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div
				className={[classes.navbarContent, '_wrapper'].join(' ')}
			>
				<Link to="/"><img src={logo} alt="logo" /></Link>
				<div className={classes.links}>
					<Link to="/catalog" className={classes.link}>catalog</Link>
					<Link to="/login" className={classes.link}>login</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
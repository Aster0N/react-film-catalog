import logo from "@/assets/img/dark-logo.svg"
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div
				className={[classes.navbarContent, '_wrapper'].join(' ')}
			>
				<div><img src={logo} alt="logo" /></div>
				<div className={classes.links}>
					<Link to="/login" className={classes.linkLogin}>login</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
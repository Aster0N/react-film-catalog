import logo from "@/assets/img/dark-logo.svg"
import NavMenu from '@/components/navMenu/NavMenu.jsx'
import { Link, useLocation } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
	const location = useLocation()

	return (
		<div className={classes.navbar}>
			<div
				className={[classes.navbarContent, '_wrapper'].join(' ')}
			>
				{(location.pathname !== '/')
					? <NavMenu />
					: <Link to="/"><img src={logo} alt="logo" /></Link>
				}
				<div className={classes.links}>
					<Link to="/catalog" className={classes.link}>catalog</Link>
					<span className={classes.linkDivider}>/</span>
					<Link to="/login" className={classes.link}>login</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
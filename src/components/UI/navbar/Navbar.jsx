import logo from "@/assets/img/logo-light.svg"
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
				{(location.pathname == '/' || location.pathname == '/login')
					? <Link to="/"><img src={logo} alt="logo" /></Link>
					: <NavMenu />
				}
				<div className={classes.links}>
					<Link to="/online-cinema" className={classes.link}>cinema</Link>
					<span className={classes.linkDivider}>/</span>
					<Link to="/login" className={classes.link}>login</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
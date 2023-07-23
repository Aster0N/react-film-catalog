import AuthContext from '@/context/AuthContext'
import UserService from '@/services/UserService'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './MenuContent.module.css'

const MenuContent = ({ isOpen }) => {
	const { setIsAuth, setUser } = useContext(AuthContext)
	const navigate = useNavigate()

	const logOut = () => {
		UserService.logOut()
		setIsAuth(false)
		setUser(null)
		navigate('/')
	}

	return (
		<div
			className={
				[classes.menuWrapper,
				isOpen ? classes.menuOpen : ''
				].join(' ')}
		>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/online-cinema">Online cinema</Link></li>
				<li><Link to="/catalog">Catalog</Link></li>
				<li><Link to="/favorites">Favorites</Link></li>
				<li><Link to="/saved">Saved</Link></li>
				<li><button onClick={logOut}>logout</button></li>
			</ul>
		</div>
	)
}

export default MenuContent
import AuthContext from '@/context/AuthContext'
import UserService from '@/services/UserService'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cl from './MenuContent.module.css'

const MenuContent = ({ isOpen, showMenu }) => {
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
				[cl.menuWrapper,
				isOpen ? cl.menuOpen : ''
				].join(' ')}
		>
			<div className={cl.menuHeader}>
				<span className={cl.menuTitle}>menu</span>
				<button onClick={showMenu} className={cl.closeMenuBtn}></button>
			</div>
			<div className={cl.menuContent}>
				<ul className={cl.list}>
					<li><Link className={cl.link} to="/">Home</Link></li>
					<li><Link className={cl.link} to="/online-cinema">Online cinema</Link></li>
					<li><Link className={cl.link} to="/catalog">Catalog</Link></li>
					<li><Link className={cl.link} to="/saved">Saved</Link></li>
				</ul>
				<button className={cl.logout} onClick={logOut}>logout</button>
			</div>
		</div>
	)
}

export default MenuContent
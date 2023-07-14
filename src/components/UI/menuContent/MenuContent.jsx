import { Link } from 'react-router-dom'
import classes from './MenuContent.module.css'

const MenuContent = ({ isOpen }) => {
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
			</ul>
		</div>
	)
}

export default MenuContent
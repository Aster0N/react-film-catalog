import { useState } from "react"
import Burger from "../UI/burger/Burger"
import MenuContent from "../UI/menuContent/MenuContent"

const NavMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const showMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div>
			<Burger showMenu={showMenu} />
			<MenuContent isOpen={isMenuOpen} />
		</div>
	)
}

export default NavMenu
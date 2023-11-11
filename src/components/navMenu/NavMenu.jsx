import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Burger from "../UI/burger/Burger"
import MenuContent from "../UI/menuContent/MenuContent"

const NavMenu = () => {
	const locationPathname = useLocation().pathname
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const showMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	useEffect(() => {
		setIsMenuOpen(false)
	}, [locationPathname])

	return (
		<div>
			<Burger showMenu={showMenu} />
			<MenuContent isOpen={isMenuOpen} />
		</div>
	)
}

export default NavMenu
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Burger from "../UI/burger/Burger"
import MenuContent from "../UI/menuContent/MenuContent"

const NavMenu = () => {
	const locationPathname = useLocation().pathname
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const showMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		if (!isMenuOpen == true) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
	}
	useEffect(() => {
		setIsMenuOpen(false)
	}, [locationPathname])

	return (
		<div>
			<Burger showMenu={showMenu} />
			<MenuContent isOpen={isMenuOpen} showMenu={showMenu} />
		</div>
	)
}

export default NavMenu
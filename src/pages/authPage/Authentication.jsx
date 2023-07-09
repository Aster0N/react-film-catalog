import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import LoginForm from '@/components/loginForm/LoginForm.jsx'
import { Link } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	return (
		<div className="_page">
			<div className="_wrapper">
				<Link to=".." className={classes.backLink}>
					<img src={shortLeftArrow} alt="go back" />
					<span className={classes.backLinkCaption}>go back</span>
				</Link>
				<LoginForm />
			</div>
		</div>
	)
}

export default Authentication
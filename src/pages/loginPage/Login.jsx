import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import { Link } from "react-router-dom"
import classes from './Login.module.css'

const Login = () => {
	return (
		<div className="_page">
			<div className="_wrapper">
				<Link to=".." className={classes.backLink}>
					<img src={shortLeftArrow} alt="go back" />
					<span className={classes.backLinkCaption}>go back</span>
				</Link>
			</div>
		</div>
	)
}

export default Login
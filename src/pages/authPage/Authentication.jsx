import shortLeftArrow from '@/assets/img/short-left-arrow.svg'
import AuthForm from '@/components/authForm/AuthForm.jsx'
import { useState } from 'react'
import { Link } from "react-router-dom"
import classes from './Authentication.module.css'

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true)

	return (
		<div className="_page">
			<div className="_wrapper">
				<Link to=".." className={classes.backLink}>
					<img src={shortLeftArrow} alt="go back" />
					<span className={classes.backLinkCaption}>go back</span>
				</Link>
				<AuthForm
					isLogin={isLogin}
					changeForm={() => setIsLogin(!isLogin)}
				/>
			</div>
		</div>
	)
}

export default Authentication
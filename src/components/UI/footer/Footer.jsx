import githubIcon from '@/assets/img/github.png'
import logo from '@/assets/img/light-logo.svg'
import classes from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.logoMini}>
				<img src={logo} alt="logo" />
			</div>
			<div className={classes.footerInfo}>
				<a target='blank' href="https://github.com/Aster0N">
					<img src={githubIcon} alt="github" />
				</a>
			</div>
		</footer>
	)
}

export default Footer
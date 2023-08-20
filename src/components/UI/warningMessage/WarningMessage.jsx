import warningIcon from '@/assets/img/exclamation.svg'
import classes from './WarningMessage.module.css'

const WarningMessage = ({ children }) => {
	return (
		<div className={classes.warningWrapper}>
			<div><img src={warningIcon} alt="exclamation-warning-icon" /></div>
			<div>{children}</div>
		</div>
	)
}

export default WarningMessage
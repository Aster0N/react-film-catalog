import classes from './SmallTextBlock.module.css'

const SmallTextBlock = ({ children, ...props }) => {
	return (
		<p
			className={[classes.smallTextBlock, props.className].join(' ')}
		>
			{children}
		</p>
	)
}

export default SmallTextBlock
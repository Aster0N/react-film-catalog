import AccentTitle from '@/components/UI/accentTitle/AccentTitle'
import SmallTextBlock from '@/components/UI/smallTextBlock/SmallTextBlock'
import classes from './Home.module.css'

const Home = () => {
	return (
		<div className="_page">
			<div className="_wrapper">
				<div className={classes.mainHeader}>
					<span>React </span>
					<span>Film </span>
					<span>Catalog</span>
				</div>
				<div className={classes.textBlock}>
					<AccentTitle>RFC</AccentTitle>
					<SmallTextBlock className={classes.SmallTextBlockWithMargin}>
						Is an online cinema that offers a wide range of movies and TV shows for its audience.
					</SmallTextBlock>
				</div>
			</div>
		</div>
	)
}

export default Home
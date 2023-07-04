import AccentTitle from '@/components/UI/accentTitle/AccentTitle'
import MyButton from '@/components/UI/button/MyButton'
import SmallTextBlock from '@/components/UI/smallTextBlock/SmallTextBlock'
import { Link } from 'react-router-dom'
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
						<Link to="/login">
							<MyButton
								className={classes.buttonInTextBlock}
							>explore</MyButton>
						</Link>
					</SmallTextBlock>
				</div>
			</div>
			<div className={classes.coverImg}></div>
			<div className="_wrapper">
				<div className={classes.textBlock}>
					<AccentTitle>Idea</AccentTitle>
					<div className={classes.SmallTextBlockWithMargin}>
						<SmallTextBlock>
							The idea of creating RFC started with a group of movie enthusiasts who wanted to make cinema accessible to everyone.
						</SmallTextBlock>
						<SmallTextBlock>
							Their vision was to create a user-friendly platform that would offer a vast collection of movies, catering to the diverse tastes of the audience.
						</SmallTextBlock>
					</div>
				</div>
				<div className={classes.benefitsBlock}>
					<AccentTitle >Benefits</AccentTitle>
					<div className={classes.benefitsContent}>
						<SmallTextBlock className={classes.benefit}>
							<span className={classes.benefitTitle}>Convenience</span>
							With RFC, you can watch your favorite movies and TV shows from the comfort of your own home, without having to leave the house.
						</SmallTextBlock>
						<SmallTextBlock className={classes.benefit}>
							<span className={classes.benefitTitle}>Affordability</span>
							RFC offers affordable subscription plans that allow you to access a vast collection of movies and TV shows without breaking the bank.
						</SmallTextBlock>
						<SmallTextBlock className={classes.benefit}>
							<span className={classes.benefitTitle}>Accessibility</span>
							RFC is easily accessible from any device with an internet connection, making it easy to watch your favorite movies and TV shows on the go.
						</SmallTextBlock>
						<SmallTextBlock className={classes.benefit}>
							<span className={classes.benefitTitle}>Quality</span>
							RFC offers high-quality streaming, so you can enjoy your favorite movies and TV shows in crystal clear resolution.
						</SmallTextBlock>
						<SmallTextBlock className={classes.benefit}>
							<span className={classes.benefitTitle}>Variety</span>
							RFC offers a wide range of movies and TV shows, catering to the diverse tastes of the audience. You can find everything from the latest blockbusters to classic films and TV show.
						</SmallTextBlock>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
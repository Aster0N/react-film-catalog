import AccentTitle from '@/components/UI/accentTitle/AccentTitle'
import MyButton from '@/components/UI/button/MyButton'
import SmallTextBlock from '@/components/UI/smallTextBlock/SmallTextBlock'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'

const Home = () => {
	const benefits = [
		{
			title: 'Convenience',
			content: 'With RFC, you can watch your favorite movies and TV shows from the comfort of your own home, without having to leave the house.',
		},
		{
			title: 'Affordability',
			content: 'RFC offers affordable subscription plans that allow you to access a vast collection of movies and TV shows without breaking the bank.',
		},
		{
			title: 'Accessibility',
			content: 'RFC is easily accessible from any device with an internet connection, making it easy to watch your favorite movies and TV shows on the go.',
		},
		{
			title: 'Quality',
			content: 'RFC offers high-quality streaming, so you can enjoy your favorite movies and TV shows in crystal clear resolution.',
		},
		{
			title: 'Variety',
			content: 'RFC offers a wide range of movies and TV shows, catering to the diverse tastes of the audience. You can find everything from the latest blockbusters to classic films and TV show.',
		},
	]

	return (
		<div className="_page">
			<div className="_wrapper">
				<div className={classes.mainTitle}>
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
						{benefits.map(benefit =>
							<SmallTextBlock
								className={classes.benefit}
								key={benefit.content}
							>
								<span className={classes.benefitTitle}>{benefit.title}</span>
								{benefit.content}
							</SmallTextBlock>
						)}
					</div>
				</div>
				<div className={classes.filmIllustration}></div>
			</div>
		</div>
	)
}

export default Home
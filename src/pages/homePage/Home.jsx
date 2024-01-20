import graphicRoundedLight from '@/assets/img/graphic-rounded-light.svg'
import graphicSharpedLight from '@/assets/img/graphic-sharped-light.svg'
import logoPreviewImage from '@/assets/img/logo-preview.svg'
import starLight from '@/assets/img/star-light.svg'
import MyButton from '@/components/UI/button/MyButton.jsx'
import pageAnimation from '@/components/pageAnimation.jsx'
import { Link } from 'react-router-dom'
import cl from './Home.module.css'

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
				<div className={[cl.block1, "_content_block"].join(' ')}>
					<div className={[cl.leftBlock1, "_left_block"].join(' ')}>
						<img src={logoPreviewImage} alt="logo" />
					</div>
					<div className={[cl.rightBlock1, "_right_block"].join(' ')}>
						<img src={graphicSharpedLight} alt="abstract graphic" />
					</div>
				</div>

				<div className={[cl.block2, "_content_block"].join(' ')}>
					<div className={[cl.leftBlock2, "_left_block"].join(' ')}>
						<p className={cl.joinText}>
							- Join us and explore a universe of captivating storytelling,
							breathtaking visuals, and unforgettable moments.</p>
					</div>
					<div className={[cl.rightBlock2, "_right_block"].join(' ')}>
						<ul className={cl.preferences}>
							<li>
								<p>
									Is an online cinema that offers a wide range of movies and TV
									shows for its audience
								</p>
							</li>
							<li>
								<p>
									User-friendly platform that would offer a vast collection of
									movies, catering to the diverse tastes of the audience
								</p>
							</li>
						</ul>
						<Link to="/online-cinema" className={cl.exploreLink}>
							<MyButton
								className={cl.buttonInTextBlock}
							>explore</MyButton>
						</Link>
					</div>
				</div>

				<div className={[cl.block3, "_content_block"].join(' ')}>
					<div className={[cl.leftBlock3, "_left_block"].join(' ')}>
						<h2 className={[cl.ideaTitle, "_title"].join(' ')}>The idea</h2>
						<div className={cl.ideaRow}>
							<p className={cl.ideaContent}>The idea of creating this platform started with a group of movie
								enthusiasts who wanted to make cinema accessible to everyone.</p>
							<img src={starLight} alt="star" />
						</div>
						<div className={cl.ideaRow}>
							<img src={starLight} alt="star" />
							<p className={cl.ideaContent}>Our passion for movies and commitment to providing an exceptional
								cinematic experience is evident in every aspect of our grand project.</p>
						</div>
						<div className={cl.ideaRow}>
							<p className={cl.ideaContent}>Our team of dedicated enthusiasts put their heart and soul into
								creating an online movie theater that exceeded expectations.</p>
							<img src={starLight} alt="star" />
						</div>
					</div>
					<div className={[cl.rightBlock3, "_right_block"].join(' ')}></div>
				</div>

				<div className={[cl.block4, "_content_block"].join(' ')}>
					<div className={[cl.leftBlock4, "_left_block"].join(' ')}>
						<h2 className={[cl.benefitsTitle, "_title"].join(' ')}>Benefits</h2>
						<div className={cl.benefitsLeftCol}>
							{benefits.map(benefit =>
								(benefits.indexOf(benefit) % 2 == 0) &&
								<div className={cl.benefit} key={benefit.title}>
									<div className={cl.benefitHeader}>
										<span className={cl.benefitNumber}>0{benefits.indexOf(benefit) + 1}</span>
										<span className={cl.benefitTitle}>{benefit.title}</span>
									</div>
									<div className={cl.benefitBody}>
										{benefit.content}
									</div>
								</div>
							)}
						</div>
					</div>
					<div className={[cl.rightBlock4, "_right_block"].join(' ')}>
						<div className={cl.benefitsRightCol}>
							{benefits.map(benefit =>
								(benefits.indexOf(benefit) % 2 !== 0) &&
								<div className={cl.benefit} key={benefit.title}>
									<div className={cl.benefitHeader}>
										<span className={cl.benefitNumber}>0{benefits.indexOf(benefit) + 1}</span>
										<span className={cl.benefitTitle}>{benefit.title}</span>
									</div>
									<div className={cl.benefitBody}>
										{benefit.content}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="_content_block">
					<div className="_left_block">
						<h2>Join us now</h2>
						<p>
							Sit back, relax, and enjoy a cinematic journey from the comfort
							of your own home. No need to rush to the theaters or stand in queue -
							now you can catch the latest blockbusters and timeless classics anytime, anywhere.
						</p>
					</div>
					<div className="_right_block">
						<button>get started</button>
					</div>
				</div>

				<img src={graphicRoundedLight} alt="abstract graphic" />
			</div>
		</div>
	)
}

export default pageAnimation(Home)
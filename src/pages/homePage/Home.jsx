import graphicRoundedLight from '@/assets/img/graphic-rounded-light.svg'
import graphicSharpedLight from '@/assets/img/graphic-sharped-light.svg'
import logoPreviewImage from '@/assets/img/logo-preview.svg'
import starLight from '@/assets/img/star-light.svg'
import MyButton from '@/components/UI/button/MyButton.jsx'
import pageAnimation from '@/components/pageAnimation.jsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cl from './Home.module.css'


const Home = () => {
	const benefits = [
		{
			title: 'Convenience',
			content: 'You can watch your favorite movies and TV shows from the comfort of your own home, without having to leave the house.',
		},
		{
			title: 'Affordability',
			content: 'We offer affordable subscription plans that allow you to access a vast collection of movies and TV shows without breaking the bank.',
		},
		{
			title: 'Accessibility',
			content: 'Our project is easily accessible from any device with an internet connection, making it easy to watch your favorite movies and TV shows on the go.',
		},
		{
			title: 'Variety',
			content: 'We offer a wide range of movies and TV shows, catering to the diverse tastes of the audience. You can find everything from the latest blockbusters to classic films and TV show.',
		},
		{
			title: 'Quality',
			content: 'Our online-cinema offers high-quality streaming, so you can enjoy your favorite movies and TV shows in crystal clear resolution.',
		}
	]

	const animationVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 }
	}

	return (
		<div className="_page">
			<div className="_wrapper">
				<motion.div className={[cl.block1, "_content_block"].join(' ')}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div className={[cl.leftBlock1, "_left_block"].join(' ')}
						variants={animationVariants}
						transition={{ delay: 0.4 }}
					>
						<img src={logoPreviewImage} alt="logo" />
					</motion.div>
					<motion.div className={[cl.rightBlock1, "_right_block"].join(' ')}
						variants={animationVariants}
						transition={{ delay: 0.3 }}
					>
						<img src={graphicSharpedLight} alt="abstract graphic" />
					</motion.div>
				</motion.div>

				<motion.div className={[cl.block2, "_content_block"].join(' ')}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className={[cl.leftBlock2, "_left_block"].join(' ')}>
						<motion.p className={cl.joinText}
							variants={animationVariants}
							transition={{ delay: 0.6 }}
						>
							- Join us and explore a universe of captivating storytelling,
							breathtaking visuals, and unforgettable moments.</motion.p>
					</div>
					<div className={[cl.rightBlock2, "_right_block"].join(' ')}>
						<ul className={cl.preferences}>
							<motion.li
								variants={animationVariants}
								transition={{ delay: 0.4 }}
							>
								<p>
									Is an online cinema that offers a wide range of movies and TV
									shows for its audience
								</p>
							</motion.li>
							<motion.li
								variants={animationVariants}
								transition={{ delay: 0.5 }}
							>
								<p>
									User-friendly platform that would offer a vast collection of
									movies, catering to the diverse tastes of the audience
								</p>
							</motion.li>
						</ul>
						<Link to="/online-cinema" className={cl.exploreLink}>
							<motion.div
								variants={animationVariants}
								transition={{ delay: 0.6 }}
							>
								<MyButton>explore</MyButton>
							</motion.div>
						</Link>
					</div>
				</motion.div>

				<motion.div className={[cl.block3, "_content_block"].join(' ')}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className={[cl.leftBlock3, "_left_block"].join(' ')}>
						<h2 className="_title">The idea</h2>
						<div className={cl.ideaRow}>
							<motion.p className={cl.ideaContent}
								variants={animationVariants}
								transition={{ delay: 0.1 }}
							>
								The idea of creating this platform started with a group of movie
								enthusiasts who wanted to make cinema accessible to everyone.</motion.p>
							<img src={starLight} alt="star" />
						</div>
						<div className={cl.ideaRow}>
							<img src={starLight} alt="star" />
							<motion.p className={cl.ideaContent}
								variants={animationVariants}
								transition={{ delay: 0.2 }}
							>
								Our passion for movies and commitment to providing an exceptional
								cinematic experience is evident in every aspect of our grand project.</motion.p>
						</div>
						<div className={cl.ideaRow}>
							<motion.p className={cl.ideaContent}
								variants={animationVariants}
								transition={{ delay: 0.3 }}
							>
								Our team of dedicated enthusiasts put their heart and soul into
								creating an online movie theater that exceeded expectations.</motion.p>
							<img src={starLight} alt="star" />
						</div>
					</div>
					<div className={[cl.rightBlock3, "_right_block"].join(' ')}></div>
				</motion.div>

				<motion.div className={[cl.block4, "_content_block"].join(' ')}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					<div className={[cl.leftBlock4, "_left_block"].join(' ')}>
						<h2 className="_title">Benefits</h2>
						<div className={cl.benefitsLeftCol}>
							{benefits.map((benefit, ind) =>
								(benefits.indexOf(benefit) % 2 == 0) &&
								<motion.div className={cl.benefit} key={benefit.title}
									variants={animationVariants}
									transition={{ delay: `0.${ind + 1}` }}
								>
									<div className={cl.benefitHeader}>
										<span className={cl.benefitNumber}>0{benefits.indexOf(benefit) + 1}</span>
										<span className={cl.benefitTitle}>{benefit.title}</span>
									</div>
									<div className={cl.benefitBody}>
										{benefit.content}
									</div>
								</motion.div>
							)}
						</div>
					</div>
					<div className={[cl.rightBlock4, "_right_block"].join(' ')}>
						<div className={cl.benefitsRightCol}>
							{benefits.map((benefit, ind) =>
								(benefits.indexOf(benefit) % 2 !== 0) &&
								<motion.div className={cl.benefit} key={benefit.title}
									variants={animationVariants}
									transition={{ delay: `0.${ind + 1}` }}
								>
									<div className={cl.benefitHeader}>
										<span className={cl.benefitNumber}>0{benefits.indexOf(benefit) + 1}</span>
										<span className={cl.benefitTitle}>{benefit.title}</span>
									</div>
									<div className={cl.benefitBody}>
										{benefit.content}
									</div>
								</motion.div>
							)}
						</div>
					</div>
				</motion.div>

				<div className={[cl.block5, "_content_block"].join(' ')}>
					<div className={[cl.leftBlock5, "_left_block"].join(' ')}>
						<h2 className="_title">Join us now</h2>
						<p className={cl.joinUsText}>
							Sit back, relax, and enjoy a cinematic journey from the comfort
							of your own home. No need to rush to the theaters or stand in queue -
							now you can catch the latest blockbusters and timeless classics anytime, anywhere.
						</p>
					</div>
					<div className={[cl.rightBlock5, "_right_block"].join(' ')}>
						<Link to="/online-cinema">
							<MyButton
								className={cl.getStartedBtn}
							>get started</MyButton>
						</Link>
					</div>
				</div>

				<motion.div className={cl.roundedGraphic}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ delay: 0.2 }}
					variants={animationVariants}
				>
					<img src={graphicRoundedLight} alt="abstract graphic" />
				</motion.div>
			</div>
		</div>
	)
}

export default pageAnimation(Home)
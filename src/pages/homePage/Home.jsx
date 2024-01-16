
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
				<div className="_content_block">
					<div className="_left_block">
						<img src="" alt="logo" />
						{/* line as after element */}
					</div>
					<div className="_right_block">
						graphic
					</div>
				</div>

				<div className="_content_block">
					<div className="_left_block">
						<p>- Join us and explore a universe of captivating storytelling,
							breathtaking visuals, and unforgettable moments.</p>
					</div>
					<div className="_right_block">
						<p>Is an online cinema that offers a wide range of movies and TV
							shows for its audience.</p>
						<p>User-friendly platform that would offer a vast collection of
							movies, catering to the diverse tastes of the audience</p>
						<button>explore</button>
					</div>
				</div>

				<div className="_content_block">
					<div className="_left_block">
						<h2>The idea</h2>
						<p>The idea of creating this platform started with a group of movie
							enthusiasts who wanted to make cinema accessible to everyone.</p>
						<img src="" alt="star" />
						<img src="" alt="star" />
						<p>Our passion for movies and commitment to providing an exceptional
							cinematic experience is evident in every aspect of our grand project.</p>
						<p>Our team of dedicated enthusiasts put their heart and soul into
							creating an online movie theater that exceeded expectations.</p>
						<img src="" alt="star" />
					</div>
					<div className="_right_block">
						<img src="" alt="abstract-image" />
					</div>
				</div>

				<div className="_content_block">
					<div className="_left_block">
						<h2>Benefits</h2>

						{benefits.map(benefit =>
							(benefits.indexOf(benefit) % 2 == 0) &&
							<div className="benefit">
								<div className="benefit-header">
									<span>0{benefits.indexOf(benefit) + 1}</span>
									<span>{benefit.title}</span>
								</div>
								<div className="benefit-body">
									{benefit.content}
								</div>
							</div>
						)}
					</div>
					<div className="_right_block">
						{benefits.map(benefit =>
							(benefits.indexOf(benefit) % 2 !== 0) &&
							<div className="benefit">
								<div className="benefit-header">
									<span>0{benefits.indexOf(benefit) + 1}</span>
									<span>{benefit.title}</span>
								</div>
								<div className="benefit-body">
									{benefit.content}
								</div>
							</div>
						)}
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

				<img src="" alt="abstract-icon" />
			</div>
		</div>
	)
}

export default pageAnimation(Home)
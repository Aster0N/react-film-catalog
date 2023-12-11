import { v4 as uuidv4 } from 'uuid'
import classes from './MovieSources.module.css'

const MovieSources = ({ sources }) => {
	const getRandomHEX = () => {
		const randomAlpha = Math.random() * (0.4 - 0.1) + 0.1
		const randomHex = ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
		return `#${randomHex}${Math.floor(randomAlpha * 255).toString(16)}`
	}

	return (
		<div className={classes.sourcesWrapper}>
			{sources.map(src =>
				<a
					href={src.web_url}
					style={{ backgroundColor: getRandomHEX() }}
					key={uuidv4()}
					className={classes.source}
					target='_blank'
				>
					<span>
						{src.name} [{src.format}]&nbsp;
					</span>
					{src.price &&
						<span className={classes.srcPrice}>
							{src.price}$
						</span>
					}
				</a>
			)}
		</div>
	)
}

export default MovieSources
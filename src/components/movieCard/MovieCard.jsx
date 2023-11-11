import { memo } from 'react'
import { Link } from 'react-router-dom'
import classes from './MovieCard.module.css'

const MovieCard = ({ movieData }) => {
	return (
		<Link to={`/online-cinema/movie/${movieData.id}`}>
			<div
				className={classes.card}
				style={{
					backgroundImage: `url(${movieData.backdrop
						? movieData.backdrop
						: movieData.poster})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<span className={classes.movieTitle}>{movieData.title}</span>
			</div>
		</Link>
	)
}

export default memo(MovieCard)
import noPhoto from '@/assets/img/no-photos.png'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import classes from './MovieCard.module.css'

const MovieCard = ({ movieData }) => {
	const getBgPoster = () => {
		if (movieData.backdrop) return movieData.backdrop
		if (movieData.poster) return movieData.poster
		return `${noPhoto}`
	}

	return (
		<Link to={`/online-cinema/movie/${movieData.id}`}>
			<div
				className={classes.card}
				style={{
					backgroundImage: `url(${getBgPoster()})`,
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
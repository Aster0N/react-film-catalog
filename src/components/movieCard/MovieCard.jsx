import { useNavigate } from 'react-router-dom'
import classes from './MovieCard.module.css'

const MovieCard = ({ movieData }) => {
	const navigate = useNavigate()

	return (
		<div
			className={classes.card}
			onClick={() => navigate(`/online-cinema/movie/${movieData.id}`)}
		>
			{movieData.title}
		</div>
	)
}

export default MovieCard
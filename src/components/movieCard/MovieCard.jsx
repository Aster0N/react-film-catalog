import classes from './MovieCard.module.css'

const MovieCard = ({ movieData }) => {
	return (
		<div className={classes.card}>
			{movieData.title}
		</div>
	)
}

export default MovieCard
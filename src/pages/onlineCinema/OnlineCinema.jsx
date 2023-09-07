import MovieCard from '@/components/movieCard/MovieCard'
import CinemaService from '@/services/CinemaService'
import { useEffect, useState } from 'react'
import classes from './OnlineCinema.module.css'

const OnlineCinema = () => {
	const [movieList, setMovieList] = useState([])

	const getMoviesData = async () => {
		const response = await CinemaService.getMovieList()
		setMovieList(response)
	}

	useEffect(() => {
		getMoviesData()
	}, [])

	return (
		<div className="_page">
			<div className="_wrapper">
				<div className={classes.movieList}>
					{movieList.map(movie =>
						<MovieCard
							key={movie.id}
							movieData={movie}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default OnlineCinema
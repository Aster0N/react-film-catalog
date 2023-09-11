import MovieCard from '@/components/movieCard/MovieCard'
import CinemaService from '@/services/CinemaService'
import { useEffect, useState } from 'react'
import classes from './OnlineCinema.module.css'

const OnlineCinema = () => {
	const [movieListPreview, setMovieListPreview] = useState([])

	const getListPreview = async () => {
		const response = await CinemaService.getMovieListPreview(10)
		setMovieListPreview(response)
	}

	const showMore = async () => {
		const response = await CinemaService.expandMovieListPreview(10)
		setMovieListPreview(prev => {
			return [
				...prev,
				...response
			]
		})
	}

	useEffect(() => {
		getListPreview()
	}, [])

	return (
		<div className="_page">
			<div className="_wrapper">
				<div className={classes.movieList}>
					{movieListPreview.map(movie =>
						<MovieCard
							key={movie.id}
							movieData={movie}
						/>
					)}
				</div>
				<button
					onClick={() => showMore()}
				>see more</button>
			</div>
		</div>
	)
}

export default OnlineCinema
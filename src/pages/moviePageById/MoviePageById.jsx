import Loader from '@/components/UI/loader/Loader.jsx'
import AuthContext from '@/context/AuthContext.jsx'
import CinemaService from '@/services/CinemaService'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './MoviePageById.module.css'

const MoviePageById = () => {
	const params = useParams()
	const [movie, setMovie] = useState({})
	const { isLoading, setIsLoading } = useContext(AuthContext)

	const loadMovieData = async () => {
		setIsLoading(true)
		const response = await CinemaService.loadMovieById(params.id)
		setMovie(response)
		setIsLoading(false)
	}

	useEffect(() => {
		loadMovieData()
	}, [])

	return (
		<div className="_page">
			<div className="_wrapper">
				{isLoading
					? <Loader />
					: <div className={classes.movieInfoWrapper}>
						<div className={classes.moviePoster}>
							<img src={movie.poster} alt="poster" />
						</div>
						<div className={classes.movieInfo}>
							<h1>{movie.title}</h1>
							<p>{movie.year}</p>
							<p>{movie.plot_overview}</p>
							<p>{movie.genre_names}</p>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default MoviePageById
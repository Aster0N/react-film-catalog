import Loader from '@/components/UI/loader/Loader.jsx'
import AuthContext from '@/context/AuthContext.jsx'
import CinemaService from '@/services/CinemaService'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import uuid from 'react-uuid'
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
					:
					<div className={classes.movieInfoWrapper}>
						<div className={classes.moviePoster}>
							<img src={movie.poster} alt="poster" />
						</div>
						<div className={classes.movieInfo}>
							<h1>{movie.title}</h1>
							<p>{movie.year}</p>
							<p>{movie.plot_overview}</p>
							<p>{movie.genre_names}</p>
							<p>{movie.runtime_minutes}</p>
							<p>{movie.user_rating}</p>
							<p>{movie.trailer_thumbnail}</p>
							<p>{movie.trailer}</p>
							{movie.sources?.map(src =>
								(<p key={uuid()}>{src.name}</p>)
							)}
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default MoviePageById
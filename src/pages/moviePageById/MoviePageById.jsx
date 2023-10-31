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
					<>
						<div className={classes.mainInfoWrapper}>
							<div className={classes.movieMainInfo}>
								<div className={classes.moviePoster}>
									<img src={movie.poster} alt="poster" />
								</div>
								<h1>{movie.title}</h1>
								<p>{movie.year}</p>
								<p>{movie.user_rating}</p>
							</div>

							<div className={classes.movieInfo}>
								Overview
								<p>{movie.plot_overview}</p>
								Genre
								<p>{movie.genre_names}</p>
								Film duration <span>{movie.runtime_minutes}</span>
							</div>
						</div>

						<div className={classes.movieTrailer}>
							<a href={movie.trailer} target="_blank">
								<img src={movie.trailer_thumbnail} alt="trailer thumbnail" />
							</a>
						</div>

						<div className={classes.movieSource}>
							Other sources
							{movie.sources?.map(src =>
							(<p key={uuid()}>
								<a href={src.web_url} target="_blank">{src.name}</a>
								<span> ({src.format})</span>
							</p>)
							)}
						</div>
					</>
				}
			</div>
		</div>
	)
}

export default MoviePageById
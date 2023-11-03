import MyButton from '@/components/UI/button/MyButton'
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

	const getMovieDuration = (minutes) => {
		return minutes > 60 ? `${+(minutes / 60).toFixed(1)} h` : `${minutes} min`
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
							<div className={classes.mainInfoPoster}>
								<img src={movie.poster} alt="poster" />
							</div>
							<div className={classes.info}>
								<div className={classes.movieTitle}>{movie.title}</div>
								<div className={classes.movieAdditionalInfo}>
									<span>{movie.release_date}</span>
									<span> / {getMovieDuration(movie.runtime_minutes)}</span>
									{(movie.genre_names?.length) > 0 &&
										<span> / {movie.genre_names?.map(genre => `${genre} `)}</span>
									}
									<br />
									<span className={classes.userRating}>{movie.user_rating}</span>
								</div>
								<div className={classes.moviePlotOverview}>{movie.plot_overview}</div>
								<div className={classes.dividerLine}></div>
								<div className={classes.actions}>
									<div className={classes.saveMovieBtn}>save</div>
									{(movie.trailer || movie.sources) &&
										<MyButton>watch</MyButton>
									}
								</div>
							</div>
						</div>

						{movie.trailer &&
							<div className={classes.movieTrailer}>{/* COMPONENT */}</div>
						}

						{movie.sources &&
							<div className={classes.movieSource}>{/* COMPONENT */}</div>
						}
					</>
				}
			</div>
		</div>
	)
}

export default MoviePageById
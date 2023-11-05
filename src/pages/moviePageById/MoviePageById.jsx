import bookmarkActive from '@/assets/img/bookmark-active.svg'
import bookmark from '@/assets/img/bookmark.svg'
import starRed from '@/assets/img/star-red.svg'
import MyButton from '@/components/UI/button/MyButton'
import Loader from '@/components/UI/loader/Loader.jsx'
import MovieSources from '@/components/movieSources/MovieSources'
import VideoPlayer from '@/components/videoPlayer/VideoPlayer'
import AuthContext from '@/context/AuthContext.jsx'
import CinemaService from '@/services/CinemaService'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './MoviePageById.module.css'

const MoviePageById = () => {
	const params = useParams()
	const [movie, setMovie] = useState({})
	const [isMovieSaved, setIsMovieSaved] = useState(false)
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

	const scrollToWatchBlock = () => {

		if (movie.trailer.length) {
			const el = document.getElementById('trailer-player')
			const scrollOptions = { behavior: 'smooth', top: el.offsetTop }
			window.scrollTo(scrollOptions)
			return
		}
		if (movie.sources.length) {
			const el = document.getElementById('sources')
			const scrollOptions = { behavior: 'smooth', top: el.offsetTop }
			window.scrollTo(scrollOptions)
		}
	}

	const saveMovie = () => {
		// TODO -> save movie in database
		setIsMovieSaved(!isMovieSaved)
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
									<span className={classes.userRating}>
										<img src={starRed} alt="rating-star" />{movie.user_rating}
									</span>
								</div>
								<div className={classes.moviePlotOverview}>{movie.plot_overview}</div>
								<div className={classes.dividerLine}></div>
								<div className={classes.actions}>
									<button className={classes.saveMovieBtn} onClick={saveMovie}>
										<img src={!isMovieSaved ? bookmark : bookmarkActive} alt="bookmark-icon" />
										{!isMovieSaved ? 'save' : 'saved'}
									</button>
									{(movie.trailer?.length > 0 || movie.sources?.length > 0) &&
										<MyButton onClick={scrollToWatchBlock}>watch</MyButton>
									}
								</div>
							</div>
						</div>
						{movie.trailer &&
							<>
								<h2 id="trailer-player" className={classes.title}>Trailer</h2>
								<VideoPlayer videoUrl={movie.trailer} />
							</>
						}

						{(movie.sources?.length > 0) &&
							<>
								<h2 id="sources" className={classes.title}>Watch</h2>
								<MovieSources sources={movie.sources} />
							</>
						}
					</>
				}
			</div>
		</div>
	)
}

export default MoviePageById
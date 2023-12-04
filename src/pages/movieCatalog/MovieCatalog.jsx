import Loader from '@/components/UI/loader/Loader'
import MovieCard from '@/components/movieCard/MovieCard'
import pageAnimation from '@/components/pageAnimation.jsx'
import AuthContext from '@/context/AuthContext'
import CinemaService from '@/services/CinemaService'
import React, { useContext, useEffect, useState } from 'react'
import classes from './MovieCatalog.module.css'

const MovieCatalog = () => {
	const [movieList, setMovieList] = useState([])
	const { isLoading, setIsLoading } = useContext(AuthContext)

	const loadFullMovieList = async () => {
		setIsLoading(true)
		const response = await CinemaService.getFullMovieList()
		setMovieList(response)
		setIsLoading(false)
	}

	useEffect(() => {
		loadFullMovieList()
	}, [])

	return (
		<div className="_page">
			<div className="_wrapper">
				{isLoading
					? <Loader />
					:
					<div className={classes.catalogWrapper}>
						{movieList.map(movie =>
							<MovieCard
								key={movie.id}
								movieData={movie}
							/>
						)}
					</div>
				}
			</div>
		</div>
	)
}

export default pageAnimation(MovieCatalog)
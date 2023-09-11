import MyButton from '@/components/UI/button/MyButton'
import MovieCard from '@/components/movieCard/MovieCard'
import CinemaService from '@/services/CinemaService'
import { useEffect, useState } from 'react'
import classes from './OnlineCinema.module.css'

const OnlineCinema = () => {
	const [movieListPreview, setMovieListPreview] = useState([])
	const [hideShowMoreBtn, setHideShowMoreBtn] = useState(false)
	const [expansionsCount, setExpansionsCount] = useState(0)
	const listExpansionsLimit = 2

	const getListPreview = async () => {
		const response = await CinemaService.getMovieListPreview(10)
		setMovieListPreview(response)
	}

	const showMore = async () => {
		if (expansionsCount == listExpansionsLimit) return

		setExpansionsCount(prev => {
			if (prev + 1 == listExpansionsLimit) {
				setHideShowMoreBtn(true)
			}
			return prev + 1
		})

		const response = await CinemaService.expandMovieListPreview(10)
		setMovieListPreview(prev => {
			return [
				...prev,
				...response
			]
		})
	}

	const seeAll = () => {
		console.log('see all')
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
				{hideShowMoreBtn
					? <MyButton onClick={() => seeAll()}>see all</MyButton>
					: <MyButton onClick={() => showMore()}>show more</MyButton>
				}
			</div>
		</div>
	)
}

export default OnlineCinema
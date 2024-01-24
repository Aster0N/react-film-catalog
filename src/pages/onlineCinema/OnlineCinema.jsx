import MyButton from '@/components/UI/button/MyButton'
import Loader from '@/components/UI/loader/Loader'
import MovieCard from '@/components/movieCard/MovieCard'
import pageAnimation from '@/components/pageAnimation.jsx'
import AuthContext from '@/context/AuthContext'
import CinemaService from '@/services/CinemaService'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './OnlineCinema.module.css'

const OnlineCinema = () => {
	const [movieListPreview, setMovieListPreview] = useState([])
	const [hideShowMoreBtn, setHideShowMoreBtn] = useState(false)
	const [expansionsCount, setExpansionsCount] = useState(0)
	const { isLoading, setIsLoading } = useContext(AuthContext)
	const listExpansionsLimit = 5

	const getListPreview = async () => {
		setIsLoading(true)
		const response = await CinemaService.getMovieListPreview(10)
		setMovieListPreview(response)
		setIsLoading(false)
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

	useEffect(() => {
		getListPreview()
	}, [])

	return (
		<div className="_page">
			<div className="_wrapper">
				<div className={classes.filterButtons}>
					<button className={[classes.filterButton, classes.filter_active].join(' ')}>for you</button>
					<button className={classes.filterButton}>saved</button>
				</div>
				{isLoading
					? <Loader />
					: <div className={classes.movieList}>
						{movieListPreview.map(movie =>
							<MovieCard
								key={movie.id}
								movieData={movie}
							/>
						)}
					</div>
				}
				<div className={classes.buttonWrapper}>
					{hideShowMoreBtn
						? <Link to={'/catalog'}><MyButton>see all</MyButton></Link>
						: <MyButton onClick={() => showMore()}>show more</MyButton>
					}
				</div>
			</div>
		</div>
	)
}

export default pageAnimation(OnlineCinema)
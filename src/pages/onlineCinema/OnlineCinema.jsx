import MovieCard from '@/components/movieCard/MovieCard'
import { db } from '@/config/firebase.js'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react'
import classes from './OnlineCinema.module.css'

const OnlineCinema = () => {
	const [movieList, setMovieList] = useState([])

	const getMovieList = async () => {
		const moviesCollectionRef = collection(db, "movies")
		try {
			const data = await getDocs(moviesCollectionRef)
			const filteredData = data.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}))
			setMovieList(filteredData)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getMovieList()
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
import CinemaService from '@/services/CinemaService'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviePageById = () => {
	const params = useParams()
	const [movie, setMovie] = useState({})

	const loadMovieData = async () => {
		const response = await CinemaService.loadMovieById(params.id)
		setMovie(response)
	}

	useEffect(() => {
		loadMovieData()
	}, [])

	return (
		<div>
			movie by id
		</div>
	)
}

export default MoviePageById
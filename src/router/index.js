import Authentication from '@/pages/authPage/Authentication'
import Home from '@/pages/homePage/Home'
import MovieCatalog from '@/pages/movieCatalog/MovieCatalog'
import MoviePageById from '@/pages/moviePageById/MoviePageById'
import OnlineCinema from '@/pages/onlineCinema/OnlineCinema'

export const privateRoutes = [
	{ path: '/', element: Home },
	{ path: '/login', element: Authentication },
	{ path: '/online-cinema', element: OnlineCinema },
	{ path: '/online-cinema/movie/:id', element: MoviePageById },
	{ path: '/catalog', element: MovieCatalog }
]

export const publicRoutes = [
	{ path: '/', element: Home },
	{ path: '/login', element: Authentication },
]
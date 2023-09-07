import Authentication from '@/pages/authPage/Authentication.jsx'
import Home from '@/pages/homePage/Home.jsx'
import MoviePageById from '@/pages/moviePageById/MoviePageById'
import OnlineCinema from '@/pages/onlineCinema/OnlineCinema'

export const privateRoutes = [
	{ path: '/', element: Home },
	{ path: '/login', element: Authentication },
	{ path: '/online-cinema', element: OnlineCinema },
	{ path: '/online-cinema/movie/:id', element: MoviePageById }
]

export const publicRoutes = [
	{ path: '/', element: Home },
	{ path: '/login', element: Authentication },
]
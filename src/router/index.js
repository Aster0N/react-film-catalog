import Authentication from '@/pages/authPage/Authentication.jsx'
import Home from '@/pages/homePage/Home.jsx'
import OnlineCinema from '@/pages/onlineCinema/OnlineCinema'

export const routes = [
	{ path: '/', element: Home },
	{ path: '/login', element: Authentication },
	{ path: '/online-cinema', element: OnlineCinema }
]
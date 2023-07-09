import Authentication from '@/pages/authPage/Authentication.jsx'
import Home from '@/pages/homePage/Home.jsx'

export const routes = [
	{ path: '/', element: Home },
	{ path: '/login', element: Authentication }
]
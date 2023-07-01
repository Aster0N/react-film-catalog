import Navbar from '@/components/UI/navbar/Navbar'
import '@/styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/appRouter/AppRouter'

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</>
	)
}

export default App

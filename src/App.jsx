import Footer from '@/components/UI/footer/Footer'
import Navbar from '@/components/UI/navbar/Navbar'
import AppRouter from '@/components/appRouter/AppRouter'
import '@/styles/App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App

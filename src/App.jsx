import Footer from '@/components/UI/footer/Footer'
import Navbar from '@/components/UI/navbar/Navbar'
import AppRouter from '@/components/appRouter/AppRouter'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navbar />
				<main>
					<AppRouter />
				</main>
				<Footer />
			</BrowserRouter >
		</AuthProvider>
	)
}

export default App

import { db } from '@/config/firebase.js'
import { collection, getDocs } from "firebase/firestore"

export default class CinemaService {
	static async getMovieList() {
		const moviesCollectionRef = collection(db, "movies")
		try {
			const data = await getDocs(moviesCollectionRef)
			const filteredData = data.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}))
			return filteredData
		} catch (err) {
			console.error(err)
		}
	}

	
}
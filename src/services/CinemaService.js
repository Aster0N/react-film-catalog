import { db } from '@/config/firebase.js'
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

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

	static async loadMovieById(id) {
		const docRef = doc(db, "movies", id)
		try {
			const dataSnapshot = await getDoc(docRef)
			if (dataSnapshot.exists()) {
				return dataSnapshot.data()
			} else {
				console.error(`Document with id ${id} does not exist`)
			}
		} catch (err) {
			console.error(err)
		}
	}
}
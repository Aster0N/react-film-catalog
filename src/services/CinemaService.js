import { db } from '@/config/firebase.js'
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	startAfter
} from "firebase/firestore"

let previewDocsLimit = 0

export default class CinemaService {
	static async getFullMovieList() {
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

	static async getMovieListPreview(docsLimit) {
		previewDocsLimit = docsLimit

		const moviesCollectionRef = collection(db, "movies")
		try {
			const previewList = query(moviesCollectionRef, limit(docsLimit))
			// ! permission denied here
			const data = await getDocs(previewList)

			const filteredData = data.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}))
			return filteredData
		} catch (err) {
			console.error(err)
		}
	}

	static async expandMovieListPreview(expandedDocsLimit) {
		const moviesCollectionRef = collection(db, "movies")

		const prevList = query(moviesCollectionRef, limit(previewDocsLimit))
		const prevListSnapshot = await getDocs(prevList)
		const lastVisibleDoc = prevListSnapshot.docs[prevListSnapshot.docs.length - 1]

		try {
			const nextDocs = query(
				moviesCollectionRef, startAfter(lastVisibleDoc), limit(expandedDocsLimit)
			)
			const data = await getDocs(nextDocs)

			previewDocsLimit += expandedDocsLimit

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
				return null
			}
		} catch (err) {
			console.error(err)
		}
	}
}
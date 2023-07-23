import { auth } from '@/config/firebase.js'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth"

export default class UserService {
	static async signUp({ userEmail, userPassword }) {
		let user = null

		await createUserWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				user = userCredential.user
			})
			.catch((error) => {
				console.error(error.message)
			})

		return user
	}

	static async logIn({ userEmail, userPassword }) {
		let user = null

		await signInWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				user = userCredential.user
			})
			.catch((error) => {
				console.error(error.message)
			})

		return user
	}

	static logOut() {
		signOut(auth).then(() => {
			console.log('Signed Out')
		}).catch((error) => {
			console.error(error.message)
		})
	}
}
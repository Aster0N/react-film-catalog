import { auth } from '@/config/firebase.js'
import { getAuthErrorDescription } from '@/helpers/getAuthErrorDescription'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth"

export default class UserService {
	static async signUp({ userEmail, userPassword }) {
		let response = {
			user: null,
			error: '',
		}

		await createUserWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				response.user = userCredential.user
			})
			.catch((error) => {
				response.error = getAuthErrorDescription(error.code)
			})

		return response
	}

	static async logIn({ userEmail, userPassword }) {
		let response = {
			user: null,
			error: '',
		}

		await signInWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				response.user = userCredential.user
			})
			.catch((error) => {
				response.error = getAuthErrorDescription(error.code)
			})

		return response
	}

	static logOut() {
		signOut(auth).then(() => {
			console.log('Signed Out')
		}).catch((error) => {
			console.error(error.message)
		})
	}
}
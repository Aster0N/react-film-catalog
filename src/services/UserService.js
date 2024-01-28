import { auth, db } from '@/config/firebase'
import { getAuthErrorDescription } from '@/helpers/getAuthErrorDescription'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

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

	static async addNewUser(user) {
		await setDoc(doc(db, "users", user.email), {
			uid: user.uid,
			email: user.email,
			accessToken: user.accessToken
		})
		console.log(`user ${user.email} created`)
	}
}
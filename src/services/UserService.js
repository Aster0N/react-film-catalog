import { auth } from '@/config/firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth"

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
}
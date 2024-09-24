import { auth, db } from '@/config/firebase'
import { getAuthErrorDescription } from '@/helpers/getAuthErrorDescription'
import axios from 'axios'
import {
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"


export default class UserService {
	static async signUp({ userEmail, userPassword }) {
		let signUpResponse = {
			user: null,
			error: '',
		}
		const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
		const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

		try {
			let response = await axios.post(signUpURL, {
				email: userEmail,
				password: userPassword,
				returnSecureToken: true,
			})

			signUpResponse = await this.getUserData(response.data.idToken)

			if (signUpResponse.error || signUpResponse.user == null) {
				return signUpResponse
			}

			localStorage.setItem('tokens', JSON.stringify({
				accessToken: response.data.idToken,
				refreshToken: response.data.refreshToken
			}))
		} catch (err) {
			// ! add some errors into firebaseAUthErrors
			signUpResponse.error = getAuthErrorDescription(err.response.data.error.message)
		}
		console.log('signed up', signUpResponse)
		return signUpResponse
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
		localStorage.removeItem('tokens')
	}

	static async addNewUser(user) {
		await setDoc(doc(db, "users", user.localId), {
			email: user.email,
			uid: user.localId
		})
		console.log('new user added', user)
	}

	static async getUserData(idToken) {
		let response = {
			user: null,
			error: ''
		}

		const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
		const getUserURL = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`
		try {
			let userData = await axios.post(getUserURL, { idToken })
			response.user = userData.data.users[0]
		} catch (err) {
			response.error = err.response?.data.error.message || err.message
		}

		return response
	}

	static async refreshToken(refToken) {
		const response = {
			tokenData: null,
			error: '',
		}

		const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
		const refreshTokenURL = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`

		try {
			let tokenData = await axios.post(refreshTokenURL, {
				grant_type: 'refresh_token',
				refresh_token: refToken
			}, {
				headers: { 'Content-Type': 'application/json' }
			})
			response.tokenData = tokenData.data
		} catch (err) {
			response.error = err.response?.data.error.message || err.message
		}

		localStorage.setItem('tokens', JSON.stringify({
			accessToken: response.tokenData.id_token,
			refreshToken: response.tokenData.refresh_token
		}))

		return response
	}
}
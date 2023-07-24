import { firebaseAuthErrors } from '@/consts/firebaseAuthErrors.js'

export const getAuthErrorDescription = (errorCode) => {
	return firebaseAuthErrors[errorCode]
}
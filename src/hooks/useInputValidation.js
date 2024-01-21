import { useEffect, useState } from "react"

const validate = (value, rules) => {
	const [isEmail, setIsEmail] = useState({ valid: false, error: "" })
	const [isPassword, setIsPassword] = useState({ valid: false, error: "" })
	const [isNormalLength, setIsNormalLength] = useState({ valid: false, error: "" })

	useEffect(() => {
		for (let rule in rules) {
			switch (rule) {
				case "checkIsEmail":
					const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
					regexEmail.test(String(value).toLocaleLowerCase())
						? setIsEmail({ valid: true, error: "" })
						: setIsEmail({ valid: false, error: "Invalid email address" })
					break
				case "checkIsPassword":
					const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?])\S{3,}$/
					regexPassword.test(String(value))
						? setIsPassword({ valid: true, error: "" })
						: setIsPassword({
							valid: false,
							error: "Password must have at least one uppercase letter, one lowercase letter, one number and one special character"
						})
					break
				case "checkMinLength":
					value.length < rules[rule]
						? setIsNormalLength({
							valid: false,
							error: `Password must be at least ${rules[rule]} characters`
						})
						: setIsNormalLength({ valid: true, error: "" })
					break
			}
		}
	}, [value])

	return {
		isEmail,
		isPassword,
		isNormalLength
	}
}

export const useInputValidation = (initialValue, validationRules) => {
	const [value, setValue] = useState(initialValue)
	const [isDirty, setIsDirty] = useState(false)
	const valid = validate(value, validationRules)

	const onChange = (e) => {
		setValue(e.target.value)
	}

	const onBlur = () => {
		setIsDirty(true)
	}

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid
	}
}
import { AnimatePresence, motion } from 'framer-motion'
const pageAnimation = (WrappedComponent) => {
	const randomId = () => {
		return Math.random() * 1000000 + Math.random() * 1000000
	}

	return (
		<AnimatePresence mode='wait'>
			<div key={randomId()}>
				<WrappedComponent />
				<motion.div
					className='_slide-in'
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 1 }}
					transition={{ duration: .8, ease: [.2, 1, .3, 1] }}
				/>
				<motion.div
					className='_slide-out'
					initial={{ scaleY: 1 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 0 }}
					transition={{ duration: .8, ease: [.2, 1, .3, 1] }}
				/>
			</div>
		</AnimatePresence>
	)
}

export default pageAnimation
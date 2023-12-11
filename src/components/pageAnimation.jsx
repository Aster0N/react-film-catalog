import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

const pageAnimation = (WrappedComponent) => {
	return (
		<AnimatePresence mode='wait'>
			<div key={uuidv4()}>
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
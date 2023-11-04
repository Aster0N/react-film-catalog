import classes from './VideoPlayer.module.css'

const VideoPlayer = ({ videoUrl }) => {
	return (
		<div className={classes.videoPlayer}>
			<iframe
				src={videoUrl.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")}
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				frameBorder="0"
				title="vide player"
			/>
		</div>
	)
}

export default VideoPlayer
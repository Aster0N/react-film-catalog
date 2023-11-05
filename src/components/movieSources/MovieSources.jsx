import classes from './MovieSources.module.css'

const MovieSources = ({ sources }) => {
	return (
		<div className={classes.sourcesWrapper}>
			{sources.map(src =>
				<a
					href={src.web_url}
					key={`${src.web_url}-${src.price}-${src.format}`}
					className={classes.source}
					target='_blank'
				>
					<span>
						{src.name} [{src.format}]&nbsp;
					</span>
					{src.price &&
						<span className={classes.srcPrice}>
							{src.price}$
						</span>
					}
				</a>
			)}
		</div>
	)
}

export default MovieSources
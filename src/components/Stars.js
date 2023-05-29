import Star from "./Star"

function Stars({ count }) {
	let counter = 0;
	const starsCount = new Array(count).fill(true).map(() => <Star key={counter++}/>);
	return (
		<ul className="card-body-stars u-clearfix">
			{
			    count <= 5 && (typeof count === 'number' && !isNaN(count)) ? starsCount : ''
			}
		</ul>
	)
} 

export default Stars
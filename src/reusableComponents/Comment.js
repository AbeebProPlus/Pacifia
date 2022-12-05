
const Comment = (props) => {
    return(
		<div className={props.textClass}>
			<p>{props.text}</p>
		</div>
    )
}

export default Comment
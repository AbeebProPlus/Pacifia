
const Button = (props) => {
    return (
        <button style = {{
            width:props.width, 
            backgroundColor: props.backgroundColor, 
            color: props.color,
            marginRight: props.marginRight
            }}className={props.clsName}>
            {props.name}
            </button>
    )
}

export default Button
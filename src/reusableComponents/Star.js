import star from "../assets/HomeAssets/star.svg"
const Star = (props)=>{
    return(
        <div>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <img src={star} alt="star" className="star"/>
                <p>{props.content}</p>
                <p>{props.company}</p>
        </div>
    )
}

export default Star
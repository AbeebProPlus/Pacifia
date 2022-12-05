import Button from "../../../reusableComponents/Button"
import Star from "../../../reusableComponents/Star"
import "../styles/Hero.css"
import "../styles/TopNav.css"
const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-header">
                <h1>Turn your product into something that sticks forever!</h1>
                <p>We offer a beautiful high-end website that hooks your audience 
                    multiplying your engagement and impressions</p>
            </div>
            <div className="btns">
                <Button name="Get started" clsName = "btn" width = "240px" />
                <Button name="Our pricing" clsName = "btn" backgroundColor ="#fff" width = "150px" color="#000"/>
            </div>
            <div className="stars">
                <Star content = "4.4/5 -- from 206 views" company = "Google" />
                <Star content = "4.6/4.5 -- from 198 views" company = "Amazon" />
            </div>
        </div>
    )   
}

export default Hero
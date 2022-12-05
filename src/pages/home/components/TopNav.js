import Button from "../../../reusableComponents/Button"
import "../styles/TopNav.css"
//import Footer from "./Footer"

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="left">
                <p>Product</p>
                <p>Resources</p>
                <p>Support</p>
            </div>
            <div className="mid">
                <h2><span className="nav-span">P</span>A<span className="nav-span">CIFI</span>A</h2>
            </div>
            <div className="right">
                <p>Company</p>
                <p>Pricing</p>
                <Button 
                name = "Contact us"
                clsName = "btn"
                />
            </div>
        </div>
    )
}

export default TopNav
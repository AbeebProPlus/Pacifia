import "../styles/Home.css";
import TopNav from "./TopNav";
import Hero from "./Hero";
import MiddleSection from "./MiddleSection";
import Footer from "./Footer";

const Home = () =>{
    return(
        <div>
            <TopNav />
            <Hero />
            <MiddleSection />
            <Footer />
        </div>
    )
}
export default Home;
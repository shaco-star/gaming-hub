import '../App.css'
import '../style/hero.css'
import heroImg from '../assets/joy_stick.png'

const Hero = ()=>{
    //Hero section 
    return (
        <section>
            <div className="container">
                <div className="hero-container">
                    <div className="text-section">
                    <h1>Welcome to GameHub!</h1>
    <p>Discover, explore, and dive deep into the world of your favorite games. Get the latest updates, reviews, and detailed information about the games you love. Join GameHub today and let's start the gaming adventure together!</p>
                    </div>
                    <img src={heroImg} alt="gaming controller" />
                </div>

            </div>
        </section>
    )
}


export default Hero;
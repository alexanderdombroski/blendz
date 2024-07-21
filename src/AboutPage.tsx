import { PreloadImages } from "./scripts/preload";

function AboutPage() {
    PreloadImages([`${process.env.PUBLIC_URL}/images/smoothie/smoothie-row.webp`]);
    
    return (
        <main className="About">
            <div className='hero'>
              <img src={`${process.env.PUBLIC_URL}/images/smoothie/smoothie-row.webp`} alt="rows of smoothies hero" />
              <h1>About Us</h1>
            </div>
            
            <h2>Our Goals</h2>
            <p>Welcome to Blendz, where we believe that a good tasting smoothie can make your day and give you the energy to do great things. Our ingredients are selected from producers who select the best products to make your smoothies extra fresh. We value quality service and strive to present you with the best smoothie experience you've ever had. We provide a wide range of customizations so you can always try something new.</p>

            <h2>Location</h2>
            
            <img src={`${process.env.PUBLIC_URL}/images/restaurant.jpg`} alt="" />

            <h3>Address</h3>
            <div className="address">
                <p>123 Main Street<br/>Idaho Falls, ID 83402</p>
            </div>

            <h2>Hours</h2>
            <ul>
                <li>Sunday: 1:00 - 6:00 PM</li>
                <li>Monday: 7:00 - 9:00 PM</li>
                <li>Tuesday: 7:00 - 8:00 PM</li>
                <li>Wednesday: 7:00 - 8:00 PM</li>
                <li>Thursday: 7:00 - 8:00 PM</li>
                <li>Friday: 7:00 - 9:00 PM</li>
                <li>Saturday: 7:00 - 9:00 PM</li>
            </ul>

        </main>
    )
}

export default AboutPage;
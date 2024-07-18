import React from 'react';
import './styles/App.css';
import { Header } from './components/Header';
import Footer from './components/Footer'
import { PageSummary } from './components/PageSummary';
import getSpecial from './scripts/special';



function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <div className='hero'>
          <img src={`${process.env.PUBLIC_URL}/images/acai-ingredients.jpg`} alt="acai ingredients hero" />
          <h1>Blendz</h1>
        </div>
        <PageSummary pageName="Menu" href="#" hopPhrases={["Order and Pickup", `Today's Special: ${getSpecial()}`,"Fully Customizable", "Kept Cool and Fresh"]}></PageSummary>
        <PageSummary pageName="About Us" href="#" hopPhrases={["Learn our Story", "See our Values", "Why Smoothies?"]}></PageSummary>
        <PageSummary pageName="Contact Us" href="#" hopPhrases={["Leave a Review", "Help us improve", "Give a Suggestion"]}></PageSummary>
        </main>
    
      <Footer />
      
    </div>
  );
}



export default App;

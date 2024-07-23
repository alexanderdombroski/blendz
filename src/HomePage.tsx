import React from 'react';
import { PageSummary } from './components/PageSummary';
import getSpecial from './scripts/special';
import { PreloadImages } from './scripts/preload';


function HomePage() {
  PreloadImages([`${process.env.PUBLIC_URL}/images/acai-ingredients.webp`])

  return (
    <main className="HomePage">
        <div className='hero'>
          <img src={`${process.env.PUBLIC_URL}/images/acai-ingredients.webp`} alt="acai ingredients hero" />
          <h1>Blendz</h1>
        </div>
      <PageSummary pageName="Menu" href={`${process.env.PUBLIC_URL}/menu`} hopPhrases={["Order and Pickup", `Today's Special: ${getSpecial()}`,"Fully Customizable", "Kept Cool and Fresh"]}></PageSummary>
      <PageSummary pageName="About Us" href={`${process.env.PUBLIC_URL}/about`} hopPhrases={["Learn our Story", "See our Values", "Why Smoothies?"]}></PageSummary>
      <PageSummary pageName="Contact Us" href={`${process.env.PUBLIC_URL}/contact`} hopPhrases={["Leave a Review", "Help us improve", "Give a Suggestion"]}></PageSummary>
    </main>
  );
}



export default HomePage;

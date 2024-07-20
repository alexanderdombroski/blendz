import { useState } from "react";
import smoothies from "./data/smoothie.json"
import ingredients from "./data/ingredients.json"
import { smoothieCard, ingredientCard } from "./components/MenuCards";


function MenuPage() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (sectionName: string | null) => {
        setActiveSection(prevSection => (prevSection === sectionName ? prevSection : sectionName));
    };
    
    return (
        <main className="Menu">
            <h1>Menu</h1>
            
            <nav className="menu-bar">
                <ul>
                    <li><button onClick={() => toggleSection('specialty')}>Specialty Smoothies</button></li>
                    <li><button onClick={() => toggleSection('ingredients')}>Build Your Own</button></li>
                </ul>
            </nav>

        {activeSection === 'ingredients' && (
            <div className="section">
                <h2>Build Your Own Smoothie</h2>
                <div className="ingredients">
                    {ingredients["ingredient"].map((i => ingredientCard(i)))}
                </div>
                
            </div>
        )}

        {(activeSection === 'specialty' || activeSection === null) && (
            <div className="section">
                <h2>Specialty Smoothies</h2>
                <div className="smoothies">
                    {smoothies.map(smoothie => smoothieCard(smoothie))}
                </div>
            </div>
        )}

        </main>
    );
}



export default MenuPage;
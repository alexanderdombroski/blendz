import { useState } from "react";
import ingredients from "./data/ingredients.json"
import { eventNames } from "process";

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
                    <li><button onClick={() => toggleSection('ingredients')}>Build Your Own</button></li>
                    <li><button onClick={() => toggleSection('specialty')}>Specialty Smoothies</button></li>
                </ul>
            </nav>

        {activeSection === 'ingredients' && (
            <div className="section">
                <h2>Build Your Own Smoothie</h2>
                
            </div>
        )}

        {(activeSection === 'specialty' || activeSection === null) && (
            <div className="section">
                <h2>Specialty Smoothies</h2>
                <div className="ingredients">
                    {ingredients["ingredient"].map((i => ingredientCard(i)))}
                </div>
            </div>
        )}

        </main>
    );
}


interface ingredient {
    id: number,
    name: string,
    image: string
    costPerUnit: number,
    calories: number
}

function ingredientCard(ingredient: ingredient) {
    return (
        <div className="ingredient" key={ingredient.id} onClick={(event) => addBorder(event)}>
            <h3>{ingredient["name"]}</h3>
            <img src={`${process.env.PUBLIC_URL}${ingredient["image"]}`} alt={ingredient["name"]} />
            <h3>{ingredient["calories"]}</h3>
            <h3>{ingredient["costPerUnit"]}</h3>
        </div>
    );
}

function addBorder(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget as HTMLDivElement;
    const currentBorder = target.style.borderColor;
    if (target != null) {
        target.style.borderColor = (currentBorder === "black") ? "#EEF8FF" : "black"
    }
}


export default MenuPage;
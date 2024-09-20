import { useState, useEffect } from "react";
import { smoothieCard, ingredientCard, smoothie, ingredient } from "./components/MenuCards";
import { queryCollection, fireObj } from "./scripts/database";

function MenuPage() {
    // Active Sections for ingredient borders
    const [activeSection, setActiveSection] = useState<string | null>(null);
    
    const toggleSection = (sectionName: string | null) => {
        setActiveSection(prevSection => (prevSection === sectionName ? prevSection : sectionName));
    };


    // Shopping Cart State management
    const [smoothieCart, setSmoothieCart] = useState<smoothieArgs[]>([]);

    function addSmoothie(smoothie: smoothieArgs): void {
        setSmoothieCart([...smoothieCart, smoothie]);
    }
    function removeSmoothie(smoothie: smoothieArgs): void {
        const i = smoothieCart.findIndex(s => s.name === smoothie.name && s.price === smoothie.price);
        if (i !== -1) {
            const newCart = [...smoothieCart]
            newCart.splice(i, 1)
            setSmoothieCart(newCart);
        }
    }

    // Loading smoothies and ingredients
    const [smoothies, setSmoothies] = useState<fireObj[]>([]);
    const [ingredients, setIngredients] = useState<fireObj[]>([]);
    useEffect(() => { (async () => {
            setSmoothies(await queryCollection("smoothies"));
        })();
    }, []);
    useEffect(() => { (async () => {
            setIngredients(await queryCollection("ingredients"));
        })();
    }, []);

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
                <p><i>Feature coming very soon!</i></p>
                <div className="ingredients">
                    {(ingredients as ingredient[]).map((i => ingredientCard(i)))}
                </div>
                
            </div>
        )}

        {(activeSection === 'specialty' || activeSection === null) && (
            <div className="section">
                <h2>Specialty Smoothies</h2>
                <div className="smoothies">
                    {(smoothies as smoothie[]).map(smoothie => smoothieCard({
                        smoothie: smoothie,
                        addCallback: addSmoothie,
                        subtractCallback: removeSmoothie
                    }))}
                </div>
            </div>
        )}

        {(smoothieCart.length !== 0) && (
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {
                        smoothieCart.map((s, i) => <li key={i}>{s.name}: ${s.price.toFixed(2)}</li>)
                    }
                </ul>
                <p>Total: ${getTotal(smoothieCart)}</p>
                <button onClick={() => {
                    checkout(smoothieCart);
                    setSmoothieCart([]);
                }}
                >Checkout</button>
            </div>
        )}
        </main>
    );
}

interface smoothieArgs {
    name: string,
    price: number
}

function checkout(cart: smoothieArgs[]) {
    const total = getTotal(cart);
    alert(`You spent $${total}! We'll keep your ${cart.length} smoothies cold for you until you pick them up.`)
    window.location.reload();
}

function getTotal(cart: smoothieArgs[]): string {
    return cart.reduce((acc, s) => acc + s.price, 0).toFixed(2);
}

export default MenuPage;
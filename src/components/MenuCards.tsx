import Counter from "./Counter"

interface ingredient {
    id: number,
    name: string,
    image: string
    costPerUnit: number,
    calories: number
}

function ingredientCard(ingredient: ingredient) {
    return (
        <div className="card" key={ingredient["id"]} onClick={(event) => addBorder(event)}>
            <h3>{ingredient["name"]}</h3>
            <img src={`${process.env.PUBLIC_URL}${ingredient["image"]}`} alt={ingredient["name"]} />
            <h3>{ingredient["calories"]} cal</h3>
            <h3>${ingredient["costPerUnit"].toFixed(2)}</h3>
        </div>
    );
}

interface smoothieCardArgs {
    smoothie: smoothie,
    addCallback: Function,
    subtractCallback: Function
}

interface smoothie {
    id: number,
    name: string,
    image: string,
    ingredients: string[],
    averageCaloriesPerOz: number,
    cost: {
        "8": number
        "12": number
        "20": number
    }
}


function smoothieCard({smoothie, addCallback, subtractCallback}: smoothieCardArgs) {
    return (
        <div className="card" key={smoothie["id"]}>
            <h3>{smoothie["name"]}</h3>
            <img src={`${process.env.PUBLIC_URL}${smoothie["image"]}`} alt={smoothie["name"]} />
            <ul>
                {
                    Object.entries(smoothie["cost"]).map(([k, v]) => 
                        <li key={k}>
                            <b>{k} oz: </b> ${v.toFixed(2)}  ({Number.parseInt(k)*smoothie["averageCaloriesPerOz"]} cal)
                            <Counter addCallback={() => addCallback({name: smoothie["name"], price: v})} subtractCallback={() => subtractCallback({name: smoothie["name"], price: v})}/>
                        </li>
                    )
                }
            </ul>
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


export { smoothieCard, ingredientCard }
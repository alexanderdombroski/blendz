
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
            <h3>{ingredient["calories"]}</h3>
            <h3>${ingredient["costPerUnit"].toFixed(2)}</h3>
        </div>
    );
}

interface smoothie {
    id: number,
    name: string,
    image: string,
    ingredients: string[],
    averageCaloriesPerOz: number,
    cost: {
        "8oz": number
        "12oz": number
        "20oz": number
    }
}


function smoothieCard(smoothie: smoothie) {
    return (
        <div className="card" key={smoothie["id"]} onClick={(event) => addBorder(event)}>
            <h3>{smoothie["name"]}</h3>
            <img src={`${process.env.PUBLIC_URL}${smoothie["image"]}`} alt={smoothie["name"]} />
            <h3>{smoothie["averageCaloriesPerOz"]}</h3>
            <ul>
                {Object.entries(smoothie.cost).map(([k, v]) => <li>{k}: ${v.toFixed(2)}</li>)}
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
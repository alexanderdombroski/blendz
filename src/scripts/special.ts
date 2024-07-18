
function getSpecial(): string {
    const date = new Date();
    return [
        "Strawberry Banana Smoothie",
        "Berry Blast Smoothie",
        "Mango Pineapple Smoothie",
        "Peanut Butter Banana Smoothie",
        "Tropical Smoothie",
        "Blueberry Acai Smoothie",
        "Carrot Orange Smoothie"
    ][date.getDay()];
}

export default getSpecial;
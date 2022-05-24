const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaguetti & Meatballs",
        vegetarian: false
    },
];

function GetVeggie(){
    return dishes.filter(dish => dish.vegetarian);
}

console.log(GetVeggie());
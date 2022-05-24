/**
 * Combined menu 
 */

function foodTruckFestival (menus) {
    let flatMenus = menus.flat();   // combine arrays
    let combinedMenu = new Set();   // store unique values

    flatMenus.forEach(item => {
        combinedMenu.add(item);
    });

    const menuNode = document.querySelector("#combined-menu");
    for(let item of combinedMenu){
        let foodNode = document.createElement("li");
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);
    }
}

foodTruckFestival([["Tacos", "Burger"], ["Pizzas"], ["Burger", "Fries"]]);

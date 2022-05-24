import fetch from 'node-fetch';

async function getUsers(){
    let people = await fetch("https://randomuser.me/api/?results=5");
    let data = await people.json();
    //console.log(people);
    const timeline = document.querySelector("#timeline");
    data.results.forEach(person => {
        let image = document.createElement("img");
        image.src = person.picture.medium;
        timeline.appendChild();
    });
}

getUsers();

/**
 * Should resolve why te import is incorrect
 */
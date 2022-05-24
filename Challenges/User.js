const username = Symbol("username");
const password = Symbol("password");

const user = {
    [username]: "fernando",
    [password]: "123456",
    age: 25
};

console.log(user.username);
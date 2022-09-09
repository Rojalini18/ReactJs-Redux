var user = {
    type: 'user',
    name: "Devin",
    age: 54,
    occupation: "NBA"
};
var admin = {
    type: 'admin',
    name: "Neymar",
    age: 41,
    role: "Footballer"
};
var retrieve = function (user, admin) {
    console.log(user.type);
    console.log(admin.type);
};
retrieve(user, admin);

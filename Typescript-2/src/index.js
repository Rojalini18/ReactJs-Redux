var masai = {
    title: "react",
    status: true,
    id: 1
};
console.log(masai);
var data = [
    {
        firstName: "Manish",
        lastName: "Kumar"
    },
    {
        firstName: "Alb",
        lastName: "Seb"
    },
    {
        firstName: "Venu",
        lastName: ""
    },
    {
        firstName: "Varun",
        lastName: ""
    },
];
var getName = function (firstName, lastName) {
    if (lastName == "") {
        return firstName;
    }
    else {
        var full_name = firstName + " " + lastName;
        return full_name;
    }
};
for (var i = 0; i < data.length; i++) {
    console.log("Full Name :", getName(data[i].firstName, data[i].lastName));
}
var put = [
    {
        houseNumber: 1,
        street: " Saheed Nagar",
        city: "BBSR",
        state: "Odisha",
        postalCode: 754106,
        country: "India"
    },
    {
        houseNumber: 2,
        street: " Satya Nagar",
        city: "CTC",
        state: "Odisha",
        postalCode: 754103,
        country: "India"
    },
];
console.log(put);
var Pers = [
    {
        phone: 1122334455,
        addresses: "Kdp",
        email: "drake@gmail.com",
        firstname: "Kylie",
        lastname: "Jenner",
        middlename: "Kristen"
    },
    {
        phone: 1234567899,
        addresses: "Bmc",
        email: "",
        firstname: "Kendall",
        lastname: "Jenner",
        middlename: ""
    },
    {
        phone: 4567890123,
        addresses: "Bbc",
        email: "",
        firstname: "Kim",
        lastname: "Kardashian",
        middlename: ""
    },
    {
        phone: 6789012345,
        addresses: "Ddc",
        email: "",
        firstname: "Selea",
        lastname: "Gomez",
        middlename: ""
    },
];
console.log(Pers.length);
//Q.5
var res = [];
var RD = [
    {
        phone: 1122334455,
        addresses: "Kdp",
        email: "drake@gmail.com",
        firstname: "Kylie",
        lastname: "Jenner",
        middlename: "Kristen"
    },
    {
        phone: 1234567899,
        addresses: "Bmc",
        email: "",
        firstname: "Kendall",
        lastname: "Jenner",
        middlename: ""
    },
    {
        phone: 4567890123,
        addresses: "Bbc",
        email: "",
        firstname: "Kim",
        lastname: "Kardashian",
        middlename: ""
    },
    {
        phone: 6789012345,
        addresses: "Ddc",
        email: "",
        firstname: "Selea",
        lastname: "Gomez",
        middlename: ""
    },
];
var PhoneBook = function (RD) {
    for (var i = 0; i < RD.length; i++) {
        if (RD[i].email !== "") {
            res.push(RD[i]);
        }
    }
    console.log(res);
};
PhoneBook(RD);

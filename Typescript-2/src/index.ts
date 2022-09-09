//Q.1
interface data {
  title: string;
  status: boolean;
  id: number;
}

const masai: data = {
  title: "react",
  status: true,
  id: 1,
};

console.log(masai);

//Q.2
interface person {
  firstName: string;
  lastName: string;
}

const data: person[] = [
  {
    firstName: "Manish",
    lastName: "Kumar",
  },
  {
    firstName: "Alb",
    lastName: "Seb",
  },
  {
    firstName: "Venu",
    lastName: "",
  },
  {
    firstName: "Varun",
    lastName: "",
  },
];

const getName = (firstName, lastName) => {
  if (lastName == "") {
    return firstName;
  } else {
    let full_name = firstName + " " + lastName;
    return full_name;
  }
};

for (let i = 0; i < data.length; i++) {
  console.log(`Full Name :`, getName(data[i].firstName, data[i].lastName));
}

//Q.3
interface Address {
  houseNumber: number;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}

const put: Address[] = [
  {
    houseNumber: 1,
    street: " Saheed Nagar",
    city: "BBSR",
    state: "Odisha",
    postalCode: 754106,
    country: "India",
  },
  {
    houseNumber: 2,
    street: " Satya Nagar",
    city: "CTC",
    state: "Odisha",
    postalCode: 754103,
    country: "India",
  },
];

console.log(put);

//Q.4

interface PersonDetails {
  phone: number;
  addresses: string;
  email: string;
  firstname: string;
  lastname: string;
  middlename: string;
}

const Pers: PersonDetails[] = [
  {
    phone: 1122334455,
    addresses: "Kdp",
    email: "drake@gmail.com",
    firstname: "Kylie",
    lastname: "Jenner",
    middlename: "Kristen",
  },
  {
    phone: 1234567899,
    addresses: "Bmc",
    email: "",
    firstname: "Kendall",
    lastname: "Jenner",
    middlename: "",
  },
  {
    phone: 4567890123,
    addresses: "Bbc",
    email: "",
    firstname: "Kim",
    lastname: "Kardashian",
    middlename: "",
  },
  {
    phone: 6789012345,
    addresses: "Ddc",
    email: "",
    firstname: "Selea",
    lastname: "Gomez",
    middlename: "",
  },
];

console.log(Pers.length);

//Q.5
let res = [];
const RD: PersonDetails[] = [
  {
    phone: 1122334455,
    addresses: "Kdp",
    email: "drake@gmail.com",
    firstname: "Kylie",
    lastname: "Jenner",
    middlename: "Kristen",
  },
  {
    phone: 1234567899,
    addresses: "Bmc",
    email: "",
    firstname: "Kendall",
    lastname: "Jenner",
    middlename: "",
  },
  {
    phone: 4567890123,
    addresses: "Bbc",
    email: "",
    firstname: "Kim",
    lastname: "Kardashian",
    middlename: "",
  },
  {
    phone: 6789012345,
    addresses: "Ddc",
    email: "",
    firstname: "Selea",
    lastname: "Gomez",
    middlename: "",
  },
];

const PhoneBook = (RD) => {
  for (var i = 0; i < RD.length; i++) {
    if (RD[i].email !== "") {
      res.push(RD[i]);
    }
  }
  console.log(res);
};
PhoneBook(RD);
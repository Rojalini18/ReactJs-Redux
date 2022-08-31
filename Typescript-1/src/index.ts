
let isFetching=false;
console.log(isFetching);

isFetching=true;
console.log(isFetching);

let fname:string="Masai";
let lname:string="school";
let full_name=`${fname}_${lname}`;
console.log(full_name);

const product=(x:number,y:number)=>{
    return (x*y)
    }
const division=(x:number,y:number)=>{
return (x/y)
}
const Name=()=>{
    console.log("Masai School");
    
}
console.log(product(5,5));
console.log(division(10,2));
Name()

let arr1:number[]=[1,2,3,4];
let arrayOfString:string[]=["Masai","School"];

arr1.push(5)
console.log("Number Array:",arr1);
arrayOfString.push("Bangalore")
console.log("String Array:",arrayOfString);

type person={
    User:string;
    SuperUser:string;
    Admin:string;
    SuperAdmin:string;
}
const person={
    User:"react",
    SuperUser:"javascript",
    Admin:"html",
    SuperAdmin:"jsx"
}
console.log(person)

enum Details{
    react,
    javascript,
    html,
    jsx,
    
}

let User = Details.react
let SuperUser = Details.javascript
let Admin = Details.html
let SuperAdmin = Details.jsx
console.log(User);
console.log(SuperUser);
console.log(Admin);
console.log(SuperAdmin);

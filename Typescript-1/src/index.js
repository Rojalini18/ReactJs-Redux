var isFetching = false;
console.log(isFetching);
isFetching = true;
console.log(isFetching);
var fname = "Masai";
var lname = "school";
var full_name = "".concat(fname, "_").concat(lname);
console.log(full_name);
var product = function (x, y) {
    return (x * y);
};
var division = function (x, y) {
    return (x / y);
};
var Name = function () {
    console.log("Masai School");
};
console.log(product(5, 5));
console.log(division(10, 2));
Name();
var arr1 = [1, 2, 3, 4];
var arrayOfString = ["Masai", "School"];
arr1.push(5);
console.log("Number Array:", arr1);
arrayOfString.push("Bangalore");
console.log("String Array:", arrayOfString);
var person = {
    User: "react",
    SuperUser: "javascript",
    Admin: "html",
    SuperAdmin: "jsx"
};
console.log(person);
var Details;
(function (Details) {
    Details[Details["react"] = 0] = "react";
    Details[Details["javascript"] = 1] = "javascript";
    Details[Details["html"] = 2] = "html";
    Details[Details["jsx"] = 3] = "jsx";
})(Details || (Details = {}));
var User = Details.react;
var SuperUser = Details.javascript;
var Admin = Details.html;
var SuperAdmin = Details.jsx;
console.log(User);
console.log(SuperUser);
console.log(Admin);
console.log(SuperAdmin);

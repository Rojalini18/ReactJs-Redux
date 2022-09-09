interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

const user: User={
  type: 'user',
  name:"Devin",
  age:54,
  occupation:"NBA"
}
const admin: Admin= {
  type: 'admin',
  name:"Neymar",
  age:41,
  role:"Footballer"
}

const retrieve=(user,admin)=>{
  
  console.log(user.type)
  console.log(admin.type);
}
retrieve(user,admin)
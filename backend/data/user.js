import bcryptjs from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("admin@123", 10),
    isAdmin: true,
  },
  {
    name: "Shivam Thakur",
    email: "shivam@gmail.com",
    password: bcryptjs.hashSync("shivam@123", 10),
    isAdmin: false,
  },
  {
    name: "Akash",
    email: "akash@gmail.com",
    password: bcryptjs.hashSync("akash@123", 10),
    isAdmin: false,
  },
  {
    name: "Goblin",
    email: "gobline@gmail.com",
    password: bcryptjs.hashSync("goblin@123", 10),
    isAdmin: false,
  },
];

export default user;

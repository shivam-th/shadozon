import bcryptjs from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shadow",
    email: "shadow@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Shivam",
    email: "shivam@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default user;

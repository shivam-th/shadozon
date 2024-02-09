import bcryptjs from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Shadow",
    email: "shadow@gmail.com",
    password: bcryptjs.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "Shivam",
    email: "shivam@gmail.com",
    password: bcryptjs.hashSync("12345678", 10),
    isAdmin: true,
  },
];

export default user;

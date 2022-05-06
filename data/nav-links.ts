
interface NavLinks {
    id: number;
    title: string;
    path: string;
}

const navLinks: NavLinks[] =  [
    {
        id: 1,
        title: "Products",
        path: "/products",
    },
    {
        id: 2,
        title: "Signup",
        path: "/signup",
    },
    {
        id: 3,
        title: "Login",
        path: "/login",
    }
]

export default navLinks
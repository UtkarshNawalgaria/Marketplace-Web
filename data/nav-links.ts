
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
]

export default navLinks

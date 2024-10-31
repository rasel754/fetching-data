"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    // const router = useRouter();
const links = [
    {
        title:"Posts",
        path:"/posts"
    },{
        title:"Meals",
        path:"/meals"
    },{
        title:"Gallery",
        path:"/gallery"
    },{
        title:"About",
        path:"/about"
    },
    
    

]
// const handleLogin = () => {
//     router.push('/services')

// };

if(pathName.includes('deshbord') )
    return <div className='bg-orange-600 p-5 '>
        this other dashboard 
    </div>
    return (
        <div>
        <nav className='bg-red-600 px-8 py-6 flex justify-between items-center'>
            <h1 className='font-bold text-2xl text-cyan-600'>Do Practice </h1>
            <ul className='flex justify-between items-center space-x-4'>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">service</a></li> */}
                {
                    links.map(link => <Link className={`${pathName === link.path && "text-cyan-600 "}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
               
            </ul>
            <button  className='bg-white text-cyan-600 p-3 rounded-lg'>Login</button>
        </nav>
    </div>
    );
};

export default Navbar;
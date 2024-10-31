import React from 'react';
// import {Playwrite_Cuba} from 'next/font/google';
import { Palanquin } from 'next/font/google';

const palanquin = Palanquin({ weight:["400" , "700"], subsets: ['latin'] });

const aboutPage = () => {
    return (
        <div className={`${palanquin.className} min-h-screen px-12 py-24`}>
            <h1 className='font-bold text-3xl'>this is about page ...</h1>
        </div>
    );
};

export default aboutPage;
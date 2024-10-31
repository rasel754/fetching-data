import { getPost } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';

const postPage = async() => {
    const postData = await getPost();
    console.log(postData);
    return (
        <div >
            <h1> Total Post : {postData.length} </h1>
            <div  className=' gap-4 grid grid-cols-5'>
                {
                postData.map((data) => (
                    <div key={data.id} className='border p-4 rounded-lg'>
                        <h3> {data.title} </h3>
                        <p> {data.body} </p>
                        <button className='p-3 rounded-xl bg-fuchsia-600 text-black'><Link href={`/posts/${data.id}`}>See Details </Link></button>
                    </div>
                ))    
                
                }
            </div>
        </div>
    );
};

export default postPage;
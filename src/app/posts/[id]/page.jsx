import React from 'react';

const getDetailsPost =async (id) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
}

const postDetailsPage = async ({params}) => {
    const {title , body} =await getDetailsPost(params.id);
    return (
        <div>
            {/* <h1>post details of : {params.id}</h1> */}
            <p>This is the details of post with id : {params.id}</p>
            <p>title : {title}</p>
            <p>body : {body}</p>
        </div>
    );
};

export default postDetailsPage;
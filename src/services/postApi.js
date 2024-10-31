export const getPost = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    // console.log(response.data);
    return data;
};
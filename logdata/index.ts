import axios from 'axios';

interface Post {
    userId: number;
    title: string;
    body: string;
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const printPost = (userId: number, title: string, body: string) => {
    console.log(`
            User ID is ${userId}
            Title of post: ${title}
            Post content: ${body}
        `)
}

axios
    .get(url)
    .then(res => {
        const post = res.data as Post;

        const userId = post.userId;
        const title = post.title;
        const body = post.body;

        printPost(userId, title, body)
    })


// Response in console must be:
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
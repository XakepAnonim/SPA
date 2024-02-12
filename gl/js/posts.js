const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const container = document.querySelector('tbody');
    if (container) {
        data.map(post => {
            const html = `
                <tr>
                    <td>${post.userId}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td><button onclick="viewDetails(${post.id})">Подробнее</button></td>
                </tr>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}

const viewDetails = (postId) => {
    window.location.href = `post.html?postId=${postId}`;
}

getPosts();

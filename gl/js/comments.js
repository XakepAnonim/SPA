const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

const getPostDetails = async () => {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postData = await postResponse.json();

    const postDetailsContainer = document.getElementById('postDetails');
    if (postDetailsContainer) {
        const postHtml = `
            <div>
                <strong>userId:</strong> ${postData.userId}<br>
                <strong>title:</strong> ${postData.title}<br>
                <strong>body:</strong> ${postData.body}
            </div>
        `;
        postDetailsContainer.innerHTML = postHtml;
    }
}

const getComments = async () => {
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const commentsData = await commentsResponse.json();

    const commentsContainer = document.getElementById('commentsContainer');
    if (commentsContainer) {
        commentsData.map(comment => {
            const html = `
                <tr>
                    <td>${comment.postId}</td>
                    <td>${comment.name}</td>
                    <td>${comment.email}</td>
                    <td>${comment.body}</td>
                </tr>
            `;
            commentsContainer.insertAdjacentHTML('beforeend', html);
        });
    }
}

getPostDetails();
getComments();

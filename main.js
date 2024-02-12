document.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        route(e);
        handleLocation();
    }
});

const route = (e) => {
    window.history.pushState({}, '', e.target.href);
}

const routers = {
    '/auth/register': 'register.html',
    '/auth/login': 'login.html',
    '/gl/users': 'users.html',
    '/gl/posts': 'posts.html',
    '/gl/comments': 'comments.html',
    '/other/albums': 'albums.html',
    '/other/photos': 'photos.html',
    '/other/todos': 'todos.html',
};

const handleLocation = async () => {
    const path = window.location.pathname;
    if (path === '/gl/posts') {
        getPosts();        
    } else {
        const html = await fetch(routers[path]).then((data) => data.text());
        document.querySelector('.container').innerHTML = html;
    }
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();
const getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();

    const container = document.querySelector('tbody');
    if (container) {
        data.map(album => {
            const html = `
                    <tr>
                        <td>${album.userId}</td>
                        <td>${album.title}</td>
                    </tr>
                `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}
getAlbums();
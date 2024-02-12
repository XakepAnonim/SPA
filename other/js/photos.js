const getPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    const container = document.querySelector('tbody');
    if (container) {
        data.map(photo => {
            const html = `
                    <tr>
                        <td>${photo.albumId}</td>
                        <td>${photo.title}</td>
                        <td>${photo.url}</td>
                        <td>${photo.thumbnailUrl}</td>
                    </tr>
                `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}
getPhotos();
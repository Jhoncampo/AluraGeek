document.getElementById('product-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-precio').value;
    const productImage = document.getElementById('product-image').files[0];

    // Subir la imagen a imgBB
    const imgBBApiKey = 'cd3db3a61cec762a75348aa9d2b4d30a';
    const formData = new FormData();
    formData.append('image', productImage);

    const response = await fetch('https://api.imgbb.com/1/upload?key=' + imgBBApiKey, {
        method: 'POST',
        body: formData,
    }).then((error) => console.log(error))

    const imgBBData = await response.json();

    if (imgBBData.data && imgBBData.data.url) {
        // Obtener la URL de imgBB
        const imgUrl = imgBBData.data.url;

        // Crear un objeto JSON con los detalles del producto
        const product = {
            name: productName,
            description: productDescription,
            imageUrl: imgUrl,
        };

        // Almacenar el objeto JSON en un archivo o base de datos
        // En este ejemplo, simplemente lo mostramos en la consola
        console.log('Producto guardado:', product);
    } else {
        console.error('Error al subir la imagen a imgBB');
    }
});
fetch('images.json')
    .then(res => {res.json()
    .then(data => {
        for (let i = 0; i < 3; i++){
            addImage(data[i].data);
        }
    });
});

function addImage(data){
    const img = document.createElement('img');
    const images = document.querySelector('.images');

    img.src = data;
    img.width = 200;
    images.append(img);
}
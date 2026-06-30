let images = [
        "https://picsum.photos/id/237/300/200",
        "https://picsum.photos/id/238/300/200",
        "https://picsum.photos/id/239/300/200"
    ];

    let index = 0;

   
    document.getElementById("slide").src = images[index];

    setInterval(() => {
        index++;

        if (index >= images.length) {
            index = 0;
        }

        document.getElementById("slide").src = images[index];
    }, 2000);
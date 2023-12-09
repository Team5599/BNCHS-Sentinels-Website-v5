const getImageDimensionsFromURL = (id, imageUrl) => {

    return new Promise((resolve, reject) => {

        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            resolve({id, width : img.width, height : img.height});
        };

        img.onerror = (err) => {
            console.log("Failed to calculate diimensions from image url", imageUrl);
            console.error(err);
            reject();
        };
    })

}

export default getImageDimensionsFromURL;
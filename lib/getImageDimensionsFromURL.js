import ColorThief from 'colorthief/dist/color-thief.mjs';

const getImageDimensionsFromURL = (id, imageUrl, getPalette = false) => {

    return new Promise((resolve, reject) => {

        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;

        img.onload = async () => {

            if (getPalette) {
                const colorThief = new ColorThief();
                const {palette, hasTransparency} = await colorThief.getPalette(img, 4, 4, false, true)
                resolve({id, width : img.width, height : img.height, palette, hasTransparency});
            }
            

            resolve({id, width : img.width, height : img.height});
        };

        img.onerror = (err) => {
            console.log("Failed to calculate dimensions from image url", imageUrl);
            console.error(err);
            reject();
        };
    })

}

export default getImageDimensionsFromURL;
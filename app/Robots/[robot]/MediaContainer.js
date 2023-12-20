import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function getYoutubeVideoIDFromURL(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


const MediaContainer = ({robotItem}) => {
    return (
        (robotItem.media) ? <Carousel
            dynamicHeight={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            showThumbs={true}
            style={{
                position: 'relative',
                display: 'flex',
                flex : 1,
                width : '100%',
                height : '100%'
            }}
        >
            {
                Object.entries(robotItem.media).map(([mediaID, mediaURL]) => {

                    // TODO
                    // Currently we handle Youtube Videos
                    // In the future, the carousel needs to handle images and 3D Models

                    const embedVideoID = getYoutubeVideoIDFromURL(mediaURL)

                    return <iframe key={mediaID} width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none', aspectRatio : '16/9'}}
                        src={`https://www.youtube.com/embed/${embedVideoID}?autoplay=0&mute=1&loop=0`}
                    />
                })
            }
        </Carousel> : <></>
    )
}

export default MediaContainer;
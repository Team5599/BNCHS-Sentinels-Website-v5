import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function getYoutubeVideoIDFromURL(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


const MediaContainer = ({robotItem}) => {
    return (
        <div
            style={{
                width : '100%',
                height : 600,
                display : 'flex',
                flexDirection : 'column',
                gap : 10
            }}
        >
            <div
                style={{
                    position: 'relative',
                    backgroundColor : '#ddd',
                    height : '100%',
                    width : '100%',
                    display : 'flex',
                    flex : 1,
                    flexGrow : 1
                }}
            >
                {
                    (robotItem.media) && <Carousel
                    dynamicHeight={false}
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

                                return <iframe key={mediaID} width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none'}}
                                    src={`https://www.youtube.com/embed/${embedVideoID}?autoplay=0&mute=1&loop=0`}
                                />
                            })
                        }
                    </Carousel>
                }
                
                
            </div>
            <div
                style={{
                    backgroundColor : '#ddd',
                    width : '100%',
                    height : 140
                }}
            >

            </div>
        </div>
    )
}

export default MediaContainer;
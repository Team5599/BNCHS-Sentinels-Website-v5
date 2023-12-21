
const ComingSoonBanner = () => {
    return (
        <div
            style={{
                maxWidth : '100%',
                width : '100vw',
                height : 320,
                backgroundColor : '#000000a0',
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                textAlign : 'center',
                marginTop : 120,
                marginBottom : 120,
                paddingBottom : 20
            }}
        >
            <div
                style={{
                    display : 'flex',
                    flexDirection : 'column'
                }}
            >
                <span
                    style={{
                        color : '#fff',
                        fontSize : 46,
                        fontWeight : 700,
                        display : 'block'
                    }}
                >
                    COMING SOON
                </span>
                <span
                    style={{
                        color : '#fff',
                        fontSize : 24,
                        fontWeight : 200
                    }}
                >
                    This page has no content right now — check back later!
                </span>
            </div>
        </div>
    )
}

export default ComingSoonBanner;
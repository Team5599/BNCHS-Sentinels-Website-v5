
import styles from './playlistPlayer.module.css';

const PlaylistItem = ({title}) => {
    return (
        <div
            className={styles.playlistItem}
            style={{
                padding : 10
            }}
        >
            <span>
                {title}
            </span>
        </div>
    )
}

const PlaylistPlayer = () => {
    return (
        <div
            style={{
                width : '100%',
                height : 500,
                backgroundColor : '#000',
                display: 'flex',
                gap : 20
            }}
        >
            <div
                style={{
                    flex : 2,
                    padding : 20,
                    paddingRight : 0
                }}
            >
                <iframe width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none', aspectRatio : '16 / 9'}}
                    src="https://www.youtube.com/embed/videoseries?si=4HSeWZP0AoxS60sj&amp;list=PLPPk4cjYYdMbqQidMMsY93u9ViMJOcQKH">
                </iframe>
            </div>
            <div
                style={{
                    color : '#fff',
                    display: 'flex',
                    flexDirection : 'column',
                    padding : 20,
                    paddingLeft : 0,
                    gap : 20,
                    flex : 1
                }}
            >
                <div
                    style={{
                        backgroundColor : '#111',
                        flex : 1,
                        flexGrow : 1,
                        display : 'flex',
                        flexDirection : 'column',
                        overflowY : 'auto',
                        padding : 5,
                        gap : 5
                    }}
                >
                    {
                        ['COMPETITION 2023', 'COMPETITION 2022', 'COMPETITION 2021', 'COMPETITION 2020', 'COMPETITION 2019'].map((playlistItem) => {
                            return <PlaylistItem key={playlistItem} title={playlistItem}/>
                        }) 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default PlaylistPlayer
'use client'

import styles from './polaroids.module.css';
import Image from 'next/image';
import Link from 'next/link';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import useWindowDimensions from '@lib/useWindowDimensions';
import { Suspense, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Polaroid = ({imageSrc, description, postUrl = "/", alt, offset = 0, rotation = 0}) => {
    return (
        <div className={styles.polaroidWrapper}>
            <div className={styles.polaroidCard} style={{marginTop : offset, transform: `rotate(${rotation}deg)`}}>
                <Link
                    className={styles.polaroidInternal}
                    href={postUrl}
                    target={'_blank'}
                >
                    <Image
                        className={styles.polaroidPicture}
                        src={imageSrc}
                        layout='fill'
                        alt={alt}
                    />
                    <div className={styles.polaroidOverlay}>
                        <span>
                            {description}
                        </span>
                    </div>
                </Link>
                <div className={styles.polaroidShader}/>
            </div>
        </div>  
    )
}

const getPolaroidData = async () => {
    return [
        {
            imageSrc: '/images/tiles/team.jpg',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            postUrl : '',
            alt : '',
            offset : 0,
            rotation : 2
        },
        {
            imageSrc: '/images/tiles/team.jpg',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            postUrl : '',
            alt : '',
            offset : 0,
            rotation : 1
        },
        {
            imageSrc: '/images/tiles/team.jpg',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            postUrl : '',
            alt : '',
            offset : 0,
            rotation : 0
        },
        {
            imageSrc: '/images/tiles/team.jpg',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            postUrl : '',
            alt : '',
            offset : 0,
            rotation : 1
        },
        {
            imageSrc: '/images/tiles/team.jpg',
            description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            postUrl : '',
            alt : '',
            offset : 0,
            rotation : -2
        }
    ]
}

const NavigationButtonPrevious = (clickHandler, hasPrevious) => {
    return (
        <div className={`${styles.carouselNavigationButton} ${styles.previous} ${!hasPrevious && styles.disabled}`}
            onClick={clickHandler}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </div>
    )
}

const NavigationButtonNext = (clickHandler, hasNext) => {
    return (
        <div className={`${styles.carouselNavigationButton} ${styles.next} ${!hasNext && styles.disabled}`}
            onClick={clickHandler}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </div>
    )
}

const Polaroids = () => {

    const [polaroidData, setPolaroidData] = useState([]);
    const {width, height} = useWindowDimensions();

    useEffect(() => {

        if (typeof window === 'undefined') return;

        const fetchData = async () => {
            setPolaroidData(await getPolaroidData());
        }

        fetchData();

    }, [])

    return (
        <div className={styles.polaroidRow}>
            <div className={styles.polaroidContainerWrapper}>
                <Suspense fallback={<>Loading Instagram Content</>}>
                    {
                        (width < 768) ? <Carousel
                            showStatus={false}
                            renderArrowNext={NavigationButtonNext}
                            renderArrowPrev={NavigationButtonPrevious}
                        >
                            {
                                polaroidData.map((_polaroid, index) => {
                                    return <Polaroid
                                        key={index}
                                        imageSrc={_polaroid.imageSrc}
                                        description={_polaroid.description}
                                        postUrl={_polaroid.postUrl}
                                        alt={_polaroid.alt}
                                        offset={_polaroid.offset}
                                        rotation={_polaroid.rotation}
                                    />
                                })
                            }
                        </Carousel> : polaroidData.map((_polaroid, index) => {
                            return <Polaroid
                                key={index}
                                imageSrc={_polaroid.imageSrc}
                                description={_polaroid.description}
                                postUrl={_polaroid.postUrl}
                                alt={_polaroid.alt}
                                offset={_polaroid.offset}
                                rotation={_polaroid.rotation}
                            />
                        })
                    }

                </Suspense>
            </div>
            
        </div>
    )
}

export default Polaroids;


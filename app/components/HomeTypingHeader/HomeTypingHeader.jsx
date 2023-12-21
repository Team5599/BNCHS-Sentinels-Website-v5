'use client'

import {useEffect, useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
import TextTransition, { presets } from 'react-text-transition';

import styles from './homeTypingHeader.module.css';

const TEXTS = ["Team 5599", "The Sentinels"]

const HomeTypingHeader = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            6000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

	return (
        <>
            <>
                <div
                    className={styles.headerContainer}
                >
                    <h1 style={{ fontWeight : 900, marginBottom : 20}}>
                        We are{'\u00A0'}
                    </h1>
                    <TextTransition
                        className={styles.typingHeader}
                        springConfig={presets.wobbly}
                    >
                        <h1 style={{ fontWeight : 900, marginBottom : 20 }}>{TEXTS[index % TEXTS.length]}</h1>
                    </TextTransition>
                </div>
            </>
            {/* <TypeAnimation
                sequence={[
                    'We are Team 5599',
                    1000, 
                    'We are The Sentinels',
                    1000,
                ]}
                wrapper="h1"
                speed={10}
                style={{ fontWeight : 900, marginBottom : 20 }}
                deletionSpeed={20}
                cursor={false}
                repeat={0}
            /> */}
        </>
	);
};

export default HomeTypingHeader
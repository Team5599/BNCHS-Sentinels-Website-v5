'use client'

import {useEffect, useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
import TextTransition, { presets } from 'react-text-transition';

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
                    style={{
                        display : 'flex',
                        justifyContent : 'center',
                        textTransform : 'uppercase'
                    }}
                >
                    <h1 style={{ fontWeight : 900, marginBottom : 20}}>
                        We are{'\u00A0'}
                    </h1>
                    <TextTransition
                        springConfig={presets.wobbly}
                        style={{
                            display: 'inline-block'
                        }}
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
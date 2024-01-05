"use client"

import { Abel } from 'next/font/google'

const abel = Abel({ subsets: ['latin'], weight : '400' })

import { useState, useEffect, useRef} from 'react';
import styles from './countdownTimer.module.css'
import { useSpring, animated } from '@react-spring/web'
import Countdown from 'react-countdown'

const AnimatedDigit = ({path, color, label, offset, animationProps}) => {

    return (
        <svg key={label} width='40' height='64' version="1.1" viewBox="0 0 8.7092 16.514" xmlns="http://www.w3.org/2000/svg">
            <g transform={`translate(${offset})`}>
                <animated.path stroke={color} className={styles.animateTest} {...path.props} strokeWidth="1.6" fill='none' strokeLinecap='round' style={{strokeDashoffset : animationProps.strokeDashoffset}}/> 
            </g>
        </svg>
    )
}

const Digit = ({digit, animationProps}) => {

    switch (digit) {
        case '0' : {
            return <AnimatedDigit
                label='0'
                color='#000'
                offset={'-30.393 -66.437'}
                animationProps={animationProps}
                path={<path d="m31.237 72.56v-.93218c0-.35082-.0291-.70285 0-1.0525.03597-.43214.04993-.88204.21507-1.283.19612-.4762.50441-.92229.89175-1.2617.36544-.3202.8246-.53985 1.2905-.67765.36665-.10844.75994-.11088 1.1422-.10495.42856.0066.86728.02879 1.2762.15731.34397.10811.6773.27716.95623.50564.3746.30684.70235.6921.91864 1.1253.20585.41232.27485.88498.33062 1.3424.04553.37349.0011.7525.0013 1.1288.000208.36084 0 .72169 0 1.0825 0 1.9546.01783 3.9092 0 5.8637-.0024.26495.02645.53297-.0145.79475-.06405.40942-.15616.82863-.35803 1.1905-.24923.44683-.59805.8567-1.0184 1.1484-.40516.28121-.8974.43285-1.3804.53246-.23248.04794-.47434.0352-.71158.02748-.41492-.01349-.84198-.0067-1.2387-.12882-.41964-.12919-.81882-.34774-1.1599-.62418-.27749-.22488-.51868-.50572-.69222-.81789-.23035-.41436-.35993-.88565-.43708-1.3534-.04337-.26295-.0097-.53293-.01162-.79943-.0142-1.9545 0-5.8637 0-5.8637" />}
            />
        }
        case '1' : {
            return <AnimatedDigit
                label='1'
                color='#000'
                offset={'-42.233 -66.658'}
                animationProps={animationProps}
                path={<path d="m46.847 81.921 4.4814-1e-6m-8.9628-12.865 3.7703-1.5875h.71107v14.453h-4.4814" />}
            />
        }
        case '2' : {
            return <AnimatedDigit
                label='2'
                color='#000'
                offset={'-73.915 -114.61'}
                animationProps={animationProps}
                path={<path d="m74.055 119.18s-.01713-.34994 0-.52365c.04154-.42136.08497-.85501.24805-1.2458.158-.37859.39876-.72985.68902-1.0198.28845-.2881.63818-.52607 1.0142-.68351.39255-.16433.82599-.23771 1.2513-.25356.61627-.023 1.2562.0201 1.8355.23151.38445.14029.74182.37717 1.0308.66698.30228.30317.53822.68181.69453 1.0804.17989.45868.24188.96281.25907 1.4552.01933.55359-.04365 1.1146-.17645 1.6524-.1514.61306-.42108 1.1937-.69889 1.7608-.30137.6152-.66459 1.1999-1.0446 1.7699-.35912.53865-.76226 1.0471-1.1643 1.5545-.47304.59706-.94246 1.1999-1.4673 1.752-.35025.36847-.74522.69167-1.1181 1.0372-.21134.19581-.41956.39504-.63434.58706-.21419.19149-.65237.5633-.65237.5633l.0052.62012 7.7725-.0579"  />}
            />
        }
        case '3' : {
            return <AnimatedDigit
                label='3'
                color='#000'
                offset={'-65.536 -66.437'}
                animationProps={animationProps}
                path={<path d="m65.677 70.974s-.02217-.53232.01101-.7954c.04129-.32735.09463-.66239.2325-.96215.20097-.43697.47617-.86056.84428-1.1701.43478-.36564.98237-.6041 1.5326-.74544.34175-.08779.70516-.07674 1.0572-.0531.47657.032.97226.06841 1.4087.26254.4777.2125.92324.54144 1.2459.95281.3341.42588.53804.95831.65099 1.4877.10942.5128.09476 1.0551.01252 1.573-.06394.40266-.18876.80428-.38816 1.1599-.19618.34987-.46725.66309-.77442.92104-.2225.18684-.49495.30577-.7541.43714-.28347.14371-.87326.38272-.87326.38272l1.0888.47283s.82655.57636 1.1208.97452c.26013.35205.41931.7775.53265 1.2003.06035.22512.06391.46243.0741.69528.02367.54094.06504 1.0911-.0304 1.6241-.07237.40415-.20113.80702-.40574 1.163-.19362.33684-.45597.64092-.75771.88566-.29714.24101-.6428.43399-1.0073.55011-.42682.13596-.88672.15514-1.3347.15678-.40404.0015-.81845-.0145-1.2048-.13258-.3812-.11649-.74438-.31084-1.0587-.55596-.295-.23005-.55028-.51905-.74817-.83652-.18994-.30472-.32574-.64803-.40464-.99833-.08825-.3918-.06987-1.2028-.06987-1.2028"/>}
            />
        }
        case '4' : {
            return <AnimatedDigit
                label='4'
                color='#000'
                offset={'-76.536 -67.7'}
                animationProps={animationProps}
                path={<path d="m84.798 79.187h-8.1304v-.33624l.35876-.6336 4.4364-7.9035.89336-1.5778h.37483v13.863"/>}
            />
        }
        case '5' : {
            return <AnimatedDigit
                label='5'
                color='#000'
                offset={'-99.074 -49.8'}
                animationProps={animationProps}
                path={<path d="m106.16 50.838s-3.616-0.01357-5.424 0c-0.22267 0.0017-0.66796 0.01003-0.66796 0.01003s-0.0439 0.44535-0.06647 0.66797c-0.16416 1.6209-0.35504 3.2391-0.50098 4.8617-0.04292 0.4772-0.11016 1.4332-0.11016 1.4332s0.7239-0.68508 1.1309-0.96941c0.37601-0.26265 0.76431-0.53039 1.2003-0.6727 0.36566-0.11935 0.76121-0.15213 1.1456-0.13832 0.50504 0.01814 1.0276 0.08138 1.4882 0.28923 0.43752 0.19741 0.83465 0.50878 1.1413 0.87806 0.29639 0.35694 0.50486 0.79402 0.63154 1.2404 0.1145 0.40342 0.086 0.83483 0.10324 1.2538 0.0357 0.86776 0.0893 1.7416 0 2.6055-0.0458 0.44302-0.0904 0.90178-0.27324 1.3079-0.19716 0.43788-0.4983 0.84014-0.86055 1.1554-0.32476 0.28264-0.72157 0.49247-1.1324 0.62112-0.40906 0.12809-0.85026 0.14341-1.2788 0.13506-0.46634-0.0091-0.94962-0.03309-1.3848-0.20104-0.47386-0.1829-0.91565-0.48136-1.264-0.85099-0.29864-0.31686-0.50454-0.7197-0.66416-1.1248-0.08104-0.20568-0.11525-0.4283-0.14299-0.64763-0.0262-0.20719-0.02148-0.62614-0.02148-0.62614"/>}
            />
        }
        case '6' : {
            return <AnimatedDigit
                label='6'
                color='#000'
                offset={'-140.29 -59.45'}
                animationProps={animationProps}
                path={<path d="m140.49 69.092c0.413-0.55005 0.91932-1.2419 1.5266-1.7027 0.2955-0.2242 0.64281-0.38528 0.99798-0.49225 0.33501-0.1009 0.69141-0.12448 1.0412-0.13278 0.31523-0.0075 0.63795-0.0049 0.94299 0.07501 0.43218 0.11319 0.85741 0.29665 1.2166 0.56227 0.34388 0.25427 0.62673 0.59472 0.85591 0.9558 0.14867 0.23424 0.25194 0.49863 0.32469 0.76635 0.0747 0.27482 0.0922 0.56297 0.11069 0.84716 0.0423 0.65011 0.0582 1.3056 0 1.9544-0.0357 0.39823-0.0701 0.80713-0.21361 1.1803-0.1406 0.36558-0.35366 0.71083-0.61948 0.99851-0.29371 0.31786-0.64905 0.59658-1.0459 0.76932-0.46968 0.20445-0.99829 0.26164-1.51 0.28558-0.44726 0.02092-0.90748-2.16e-4 -1.3374-0.12534-0.37455-0.10901-0.73036-0.29819-1.0418-0.5331-0.27642-0.2085-0.51095-0.47512-0.709-0.75912-0.15988-0.22927-0.28997-0.48334-0.37722-0.74888-0.10416-0.31698-0.14021-0.6543-0.16772-0.98682-0.0633-0.76455 8e-3 -1.5343 7e-3 -2.3015-7e-5 -0.76525-7e-3 -1.5305-8e-3 -2.2957-1e-3 -1.3787-0.14797-2.7659 6e-3 -4.136 0.0394-0.3512 0.0912-0.71068 0.23346-1.0342 0.18197-0.41385 0.45182-0.79629 0.77308-1.1144 0.23501-0.23268 0.52155-0.41656 0.82078-0.55738 0.30447-0.14329 0.63691-0.22961 0.9693-0.28207 0.27381-0.04322 0.55411-0.03135 0.83124-0.02486 0.27632 0.0065 0.55625 0.0068 0.82674 0.06358 0.27195 0.05713 0.53957 0.14879 0.78665 0.27594 0.28538 0.14686 0.55831 0.32935 0.78743 0.55411 0.26568 0.26062 0.49784 0.56557 0.65996 0.90057 0.17338 0.35826 0.26127 0.75704 0.31737 1.1511 0.0367 0.25774 0.0108 0.78093 0.0108 0.78093"/>}
            />
        }
        case '7' : {
            return <AnimatedDigit
                label='7'
                color='#000'
                offset={'-170.29 -101.265'}
                animationProps={animationProps}
                path={<path d="m170.43 104.67v-2.7836h7.0776v0.34175l-0.18765 0.45891-5.8647 14.33"/>}
            />
        }
        case '8' : {
            return <AnimatedDigit
                label='8'
                color='#000'
                offset={'-264.26122 -121.06'}
                animationProps={animationProps}
                path={<path d="m 266.68327,129.03095 c 0,0 -0.44391,-0.27207 -0.65199,-0.42789 -0.32267,-0.24162 -0.66026,-0.47622 -0.92126,-0.78342 -0.18304,-0.21544 -0.32771,-0.46597 -0.43782,-0.72635 -0.11519,-0.27236 -0.18784,-0.56463 -0.22613,-0.85786 -0.0662,-0.50684 -0.0722,-1.02698 -0.003,-1.53342 0.0462,-0.33817 0.1278,-0.67867 0.27649,-0.9859 0.17564,-0.36291 0.41765,-0.70182 0.7107,-0.97873 0.28245,-0.26688 0.62387,-0.47632 0.98058,-0.63046 0.28272,-0.12216 0.59068,-0.18718 0.89652,-0.22352 0.44718,-0.0531 0.90571,-0.057 1.35094,0.0106 0.3394,0.0515 0.67958,0.14275 0.98588,0.29775 0.36481,0.18461 0.70593,0.43373 0.98116,0.73607 0.25833,0.28379 0.46103,0.6245 0.60155,0.9816 0.13256,0.33686 0.18169,0.70396 0.21577,1.06435 0.0375,0.39713 0.0517,0.80311 -0.0137,1.19661 -0.0743,0.44739 -0.1905,0.90436 -0.42525,1.2924 -0.26137,0.43206 -0.70063,0.7274 -1.05481,1.08732 -0.1663,0.16899 -0.50252,0.5034 -0.50252,0.5034 l -0.9043,-0.008 -0.78887,-0.002 -1.06952,-0.0126 c 0,0 -0.6116,0.36674 -0.88588,0.59252 -0.29534,0.24313 -0.58934,0.50068 -0.80942,0.81358 -0.20327,0.28901 -0.35721,0.61795 -0.45446,0.95763 -0.0895,0.3127 -0.0939,0.64459 -0.11154,0.96937 -0.0261,0.48135 -0.0492,0.96761 0.009,1.44613 0.0415,0.34079 0.10412,0.68644 0.2408,1.00135 0.15313,0.35281 0.36549,0.68906 0.63522,0.96324 0.31452,0.3197 0.69936,0.58079 1.11092,0.75897 0.32152,0.1392 0.67812,0.18762 1.02624,0.22712 0.21174,0.024 0.42635,0.0139 0.63926,0.005 0.29743,-0.0122 0.59988,-0.0113 0.88942,-0.0805 0.30252,-0.0723 0.6003,-0.18489 0.86697,-0.34497 0.32538,-0.19533 0.62738,-0.44296 0.86888,-0.73571 0.23875,-0.28942 0.42422,-0.6284 0.55078,-0.98159 0.11793,-0.3291 0.15358,-0.68419 0.18448,-1.0324 0.0397,-0.44691 0.0304,-0.89834 2.7e-4,-1.34599 -0.0195,-0.28965 -0.0325,-0.58526 -0.11684,-0.86305 -0.10937,-0.36028 -0.28054,-0.70611 -0.49629,-1.01467 -0.19892,-0.28449 -0.4686,-0.51319 -0.72158,-0.7509 -0.21141,-0.19865 -0.66378,-0.56282 -0.66378,-0.56282"/>}
            />
        }
        case '9' : {
            return <AnimatedDigit
                label='9'
                color='#000'
                offset={'-273.22 -108.15'}
                animationProps={animationProps}
                path={<path d="m280.43 115.03c0.019-0.0165-0.48283 0.76107-1.363 1.5037-0.28412 0.23971-0.60583 0.44561-0.95228 0.58035-0.30807 0.11982-0.64336 0.16658-0.97296 0.19168-0.37155 0.0283-0.75102 0.0232-1.1169-0.0475-0.31487-0.0608-0.62636-0.16541-0.90723-0.32017-0.33405-0.18408-0.64372-0.42474-0.8983-0.70875-0.24522-0.27357-0.443-0.59539-0.58433-0.9345-0.11739-0.28167-0.17472-0.588-0.20953-0.89116-0.10068-0.87678-0.11512-1.7734 6e-3 -2.6476 0.0474-0.34195 0.13106-0.68551 0.27932-0.99727 0.16102-0.33858 0.38475-0.65256 0.64869-0.91882 0.23396-0.23601 0.51107-0.43565 0.80939-0.58208 0.34172-0.16774 0.71757-0.27319 1.0946-0.32563 0.47579-0.0662 0.96636-0.0556 1.441 0.0184 0.309 0.0482 0.61933 0.13081 0.89723 0.27424 0.40539 0.20923 0.78905 0.48732 1.0843 0.83511 0.27841 0.32796 0.4742 0.72892 0.61103 1.1368 0.0948 0.2825 0.1149 0.58618 0.13727 0.88331 0.0586 0.77761-8e-3 1.5596-9e-3 2.3394-2e-3 2.0606 0.19928 4.13 9e-3 6.1818-0.0369 0.39792-0.0767 0.80591-0.22218 1.1781-0.14136 0.36169-0.35527 0.7015-0.6176 0.98783-0.26808 0.29262-0.59672 0.53711-0.9505 0.71691-0.30963 0.15737-0.65465 0.24479-0.9972 0.30217-0.2279 0.0382-0.46165 0.0255-0.69272 0.0261-0.24688 7.2e-4 -0.49619 0.0135-0.74028-0.0236-0.31121-0.0472-0.62532-0.11752-0.91026-0.25126-0.354-0.16617-0.68631-0.39384-0.96266-0.67053-0.26224-0.26256-0.47107-0.58148-0.63517-0.91432-0.1176-0.23851-0.1956-0.49827-0.24259-0.76001-0.0652-0.36343-0.0513-1.1065-0.0513-1.1065"/>}
            />
        }
        default : {
            return <span>
                Error
            </span>
        }
    }
}


function zeroPad(digit) {
    if (digit.toString().length <= 1) {
        return '0' + digit;
    }
    return digit.toString();
}

const TimerSection = ({digits, label, animationProps}) => {

    const paddedDigit = zeroPad(digits);

    return (
        <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                gap : 10
            }}
        >
            <div
                style={{
                    display : 'flex',
                    flexDirection : 'row',
                    gap : 10
                }}
            >
                {
                    (paddedDigit.split('')).map((value, index) => {
                        return <Digit animationProps={animationProps} key={`${label}-${index}`} digit={value}/>
                    })
                }
            </div>
            <div
                style={{
                    display: 'flex',
                    height : 30,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}
            >
                <span
                    style={{
                        fontSize : 20,
                        fontWeight : 600
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    )
}

function getDifferenceBetween(d1, d2){

    let delta = Math.abs(d2 - d1) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    const seconds = Math.floor(delta % 60);  // in theory the modulus is not required

    return {days, hours, minutes, seconds, total : Math.floor(Math.abs(d2 - d1) / 1000)};
}

const Divider = () => {
    return (
        <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-between',
                height : 40,
                paddingBottom : 40
            }}
        >
            <div
                style={{
                    backgroundColor : '#000',
                    borderRadius : '50%',
                    width : 8,
                    height : 8
                }}
            />
            <div
                style={{
                    backgroundColor : '#000',
                    borderRadius : '50%',
                    width : 8,
                    height : 8
                }}
            />
        </div>
    )
}

const CountdownTimer = ({style = {}, date,  renderHeader = <></>, onComplete, renderComplete = <></>}) => {

    const [isComplete, setComplete] = useState(false);

    console.log("Date", date);

    const [animationProps, animationAPI] = useSpring(
        () => ({
            from : {
                strokeDashoffset : 25.95
            },
            to : {
                strokeDashoffset : -11.65
            },
            loop : true,
            config : {
                duration : 1000,
                mass : 5,
                friction: 120,
                tension : 120
            }
        }),
        []
    )

    if (isComplete && renderComplete) {
        return renderComplete
    }

    return (
        <Countdown
            date={date}
            intervalDelay={0}
            precision={3}
            renderer={({days, formatted}) => {
                console.log("days", days);
                return <div
                    style={{
                        display : 'flex',
                        flexDirection : 'column',
                        gap : 60,
                        backgroundColor : '#eaeaea',
                        justifyContent : 'center',
                        alignItems : 'center',
                        paddingTop : 80,
                        paddingBottom : 80,
                        minHeight : 260,
                        overflow : 'hidden', /* Prevents exploding during mobile */
                        ...style
                    }}
                >
                    {renderHeader}
                    <div
                        className={styles.digitsContainer}
                    >
                        {
                            (days > 0) && <TimerSection animationProps={animationProps} digits={formatted.days} label={days == 1 ? 'Day' : 'Days'}/>
                        }
                        <TimerSection animationProps={animationProps} digits={formatted.hours} label={'Hours'}/>
                        <Divider/>
                        <TimerSection animationProps={animationProps} digits={formatted.minutes} label={'Minutes'}/>
                        <Divider/>
                        <TimerSection animationProps={animationProps} digits={formatted.seconds} label={'Seconds'}/>
                    </div>
                    
                </div>
            }}
            onComplete={() => {
                setComplete(true);
                if (onComplete) {
                    onComplete();
                }
            }}
        />
    )
}

const CountdownTimerLegacy = ({style = {}, date, renderHeader = <></>, onComplete, renderComplete = <></>}) => {

    const [remainingTime, setRemainingTime] = useState(getDifferenceBetween(date, new Date()));
    const [isComplete, setComplete] = useState(false);

    const [animationProps, animationAPI] = useSpring(
        () => ({
            from : {
                strokeDashoffset : 25.95
            },
            to : {
                strokeDashoffset : -11.65
            },
            loop : true,
            config : {
                duration : 1000,
                mass : 5,
                friction: 120,
                tension : 120
            }
        }),
        []
    )

    useEffect(() => {

        if (isComplete) return;

        const interval = setInterval(() => {
            const remainingTime = getDifferenceBetween(date, new Date());

            if (remainingTime.total <= 0) {
                setComplete(true);
                console.log("Complete!");
                if (onComplete) {
                    onComplete();
                }
            }

            setRemainingTime(remainingTime);

        }, 1000)

        return (() => {
            clearInterval(interval);
        })

    }, [date, isComplete, onComplete, animationAPI])

    useEffect(() => {
        if (isComplete && onComplete) {
            onComplete();
        }
    }, [isComplete, onComplete])


    if (isComplete && renderComplete) {
        return renderComplete
    }

    return (
        <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                gap : 60,
                backgroundColor : '#eaeaea',
                justifyContent : 'center',
                alignItems : 'center',
                paddingTop : 80,
                paddingBottom : 80,
                minHeight : 260,
                overflow : 'hidden', /* Prevents exploding during mobile */
                ...style
            }}
        >
            {renderHeader}
            <div
                className={styles.digitsContainer}
            >
                {
                    (remainingTime.days !== "00") && <TimerSection animationProps={animationProps} digits={remainingTime.days} label={'Days'}/>
                }
                <TimerSection animationProps={animationProps} digits={remainingTime.hours} label={'Hours'}/>
                <Divider/>
                <TimerSection animationProps={animationProps} digits={remainingTime.minutes} label={'Minutes'}/>
                <Divider/>
                <TimerSection animationProps={animationProps} digits={remainingTime.seconds} label={'Seconds'}/>
            </div>
            
        </div>
    )
}


export default CountdownTimer;
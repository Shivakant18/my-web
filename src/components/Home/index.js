import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['h', 'i', 'v', 'a', 'k', 'a', 'n','t'];
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ];

    useEffect(() => {
        // Using setTimeout with a cleanup function to avoid memory leaks
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                        <br />
                    </h1>
                    <h2>FrontEnd Developer / MERN / Java / BackEnd Developer.</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Home;

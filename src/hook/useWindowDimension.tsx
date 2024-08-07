"use client";

import {useState, useEffect} from 'react';

function getWindowDimensions() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

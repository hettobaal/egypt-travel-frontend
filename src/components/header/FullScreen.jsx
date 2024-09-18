'use client'
import React from 'react'
import { RxEnterFullScreen } from "react-icons/rx";

function FullScreen() {
    const fullScreen = () => {
        const element = document.getElementById("container");
        const isFullScreen = document.fullscreenElement;

        if (element && !isFullScreen) {
            element.requestFullscreen();
        } else if (isFullScreen) {
            document.exitFullscreen();
        }
    };
    return (
        <button className='py-2 hidden md:flex items-center dark:bg-darkModeSecondary px-2.5 rounded-full bg-silver' onClick={() => fullScreen()}>
            <RxEnterFullScreen size={20} />
        </button>
    )
}

export default FullScreen;
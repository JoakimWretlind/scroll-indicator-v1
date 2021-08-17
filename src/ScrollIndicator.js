import { useState, useEffect } from 'react';
import {
    ProgressMainWrapper,
    ProgressMainStyle
} from './Scroll.styling';

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <>
            <ProgressMainWrapper>
                <ProgressMainStyle style={{
                    width: `${scrollTop}%`
                }}>

                </ProgressMainStyle>
            </ProgressMainWrapper>
        </>
    )
}

export default ScrollIndicator

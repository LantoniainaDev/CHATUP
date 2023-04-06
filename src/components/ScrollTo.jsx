import React, { useEffect, useMemo, useState } from 'react';

const ScrollTo = ({className,reference}) => {
    // eslint-disable-next-line
    const [display,setDisplay] = useState(true);
    const observer = useMemo(()=>new global.IntersectionObserver(callBack,{threshold:.1}),[]);
    useEffect(()=>observer.observe(reference.current),[reference,observer]);

    function callBack(entries,observer) {
        const entry = entries[0];
        setDisplay(entry.isVisible === entry.isIntersecting);
    }

    function toTop() {
        reference.current.scrollIntoView(true);
    }
    return (
        <button style={{display:display?"flex":"none"}} onClick={toTop} className={'Top '+className}>
                ❰
        </button>
    );
};

export default ScrollTo;
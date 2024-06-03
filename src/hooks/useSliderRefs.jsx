import React from 'react';
import { useRef, useEffect } from 'react';

const useSliderRefs = (count) => {
    const refs = useRef([]);
    if (refs.current.length !== count) {
        refs.current = Array(count)
            .fill()
            .map((_, i) => refs.current[i] || React.createRef());
    }
    return refs.current;
};

export default useSliderRefs;

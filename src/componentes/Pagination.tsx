import { useState } from "react";

const usePagination = <T,>(totalItems: number, itemsPerPage: number) => {
    const [startIndex, setStartIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (currentIndex < totalItems - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            if (currentIndex >= startIndex + itemsPerPage - 1) {
                setStartIndex(prevIndex => prevIndex + 1);
            }
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
            if (currentIndex <= startIndex) {
                setStartIndex(prevIndex => prevIndex - 1);
            }
        }
    };

    const visibleItems = (items: T[]): T[] => items.slice(startIndex, startIndex + itemsPerPage);

    return { currentIndex, startIndex, next, prev, visibleItems };
}

export default usePagination;
import { FC, useEffect, useState, useCallback } from 'react';
import { useLazyBackgroundImage } from '@/app/hooks/useLazyBackgroundImage';
import './PortraitCarousel.css';

interface PortraitCarouselProps {
    children: React.ReactNode
};

const imagesArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
];
const initialImageIndex = 6;
let usedImageIndexes: number[] = [initialImageIndex];
const intervalChangeMs = 10000;

const PortraitCarousel: FC<PortraitCarouselProps> = ({ children }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(imagesArray[initialImageIndex]);

    const setNextImage = useCallback(() => {
        if (usedImageIndexes.length >= imagesArray.length) {
            usedImageIndexes = [];
        }

        let randomImageId = currentImageIndex;
        while (true) {
            randomImageId = Math.floor(Math.random() * imagesArray.length);
            if (usedImageIndexes.indexOf(randomImageId) === -1)
                break;
        }
        usedImageIndexes.push(randomImageId);
        setCurrentImageIndex(imagesArray[randomImageId]);
    }, [currentImageIndex]);

    useEffect(() => {
        if (!imagesArray || imagesArray.length === 0) {
            console.warn("No images available for changing.");
            return;
        }

        const intervalId = setInterval(setNextImage, intervalChangeMs);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [setNextImage]); // Only setNextImage as dependency since other values are constants

    const { backgroundStyle, isLoaded } = useLazyBackgroundImage({
        smallSrc: `img/portraits/portrait${currentImageIndex}_small.jpeg`,
        fullSrc: `img/portraits/portrait${currentImageIndex}.jpeg`
    });

    return (
        <>
            <div
                className={`banner ${isLoaded ? 'loaded' : ''}`}
                style={backgroundStyle}
            >
                {children}
            </div>
        </>
    );
};

export default PortraitCarousel;
import { useEffect, useState } from 'react';

interface UseLazyBackgroundImageProps {
    smallSrc: string;
    fullSrc: string;
    threshold?: number;
}

const preloadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
};

export const useLazyBackgroundImage = ({ 
    smallSrc, 
    fullSrc
}: UseLazyBackgroundImageProps) => {
    const [images, setImages] = useState<{ small?: HTMLImageElement; full?: HTMLImageElement }>({});
    const [isLoaded, setIsLoaded] = useState(false);

    // Load small image immediately
    useEffect(() => {
        setIsLoaded(false);
        preloadImage(smallSrc).then(img => {
            setImages({ small: img });
        });
    }, [smallSrc]);

    // Trigger full image load immediately
    useEffect(() => {
        const loadFullImage = async () => {
            try {
                const img = await preloadImage(fullSrc);
                setImages(prev => ({ ...prev, full: img }));
                setIsLoaded(true);
            } catch (error) {
                console.error('Failed to load full image:', error);
            }
        };

        loadFullImage();
    }, [images.small, fullSrc]);

    const currentImage = images.full ?? images.small;
    const backgroundStyle = currentImage ? {
        backgroundImage: `url(${currentImage.src})`,
        imageType: images.full ? 'full' : 'small'
    } : {};

    return { backgroundStyle, isLoaded };
};

import React, { useEffect, useRef, useState } from 'react';
import './styles.css'; // Import your CSS file for styling

type ImageProps = {
    imageUrl: string;
    width: number;
    height: number;
  };
  

const ArchImage = ({imageUrl, width, height}:ImageProps) => {
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            const containerWidth = width === 0 ? window.innerWidth : width; 
            const containerHeight = height === 0 ? window.innerHeight : height;

            if (containerWidth / aspectRatio > containerHeight) {
                setImageDimensions({ width: containerHeight * aspectRatio, height: containerHeight });
            } else {
                setImageDimensions({ width: containerWidth, height: containerWidth / aspectRatio });
            }
        };
    }, [imageUrl, width, height]);

    return (
        <div className='justify-center align-center flex'>
            <img
                src={imageUrl}
                alt="Fullscreen"
                style={{ flex:1, width: `${imageDimensions.width}px`, height: `${imageDimensions.height}px`, maxHeight: '99.9%', objectFit: 'contain', backgroundColor: 'white' }}
            />
        </div>
    );
};

export default ArchImage;

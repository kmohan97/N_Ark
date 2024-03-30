import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '.';
import './styles.css'; // Import your CSS file for styling

type ImageViewerProps = {
    imageUrl: string;
    onClose: () => void;
}

const ImageViewer = ({ imageUrl, onClose }: ImageViewerProps) => {
    const [imageDimensions, setImageDimensions] = useState({ width: window.innerHeight, height: window.innerHeight });

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            const containerWidth = window.innerWidth * 0.80; // 90% of window width
            const containerHeight = window.innerHeight * 0.80; // 90% of window height

            if (containerWidth / aspectRatio > containerHeight) {
                setImageDimensions({ width: containerHeight * aspectRatio, height: containerHeight });
            } else {
                setImageDimensions({ width: containerWidth, height: containerWidth / aspectRatio });
            }
        };
    }, [imageUrl]);

    console.log("Image dimensions --",imageDimensions);

    const handleClose = () => {
        onClose();
    };

    return (

        <div className="image-viewer" onClick={handleClose}>
            <div className="image-container" onClick={e => e.stopPropagation()}>

                <img
                    src={imageUrl}
                    alt="Fullscreen"
                    style={{ width: `${imageDimensions.width}px`, height: `${imageDimensions.height}px` }}
                />
              
                <button className="close-button" onClick={handleClose}>
                    <img src={getImageUrl('cross.png')} width={0} height={0} />
                </button>

            </div>
        </div>
    );
};

export default ImageViewer;

import React from 'react';

const ImageItem = ({ title, url }) => {
    return (
        <div className='img-text-container'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );
}

export default ImageItem;
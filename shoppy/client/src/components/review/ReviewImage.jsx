import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewImage({review}) {
    const currentImage = review.reviewImages.slice(0, 8);

    return (
        <div className="review-images">
            {currentImage.map((src) =>
                <img src={src} />
            )}
        </div>
    );
}


import { generatePhotos } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import { renderBigPicture } from './big-picture.js';

const photosData = generatePhotos();

renderThumbnails(photosData);
renderBigPicture(photosData);

import { renderThumbnails } from './thumbnails.js';
import { generatePhotos } from './data.js';
import './big-picture.js';

const photosData = generatePhotos();

renderThumbnails(photosData);

export {photosData};

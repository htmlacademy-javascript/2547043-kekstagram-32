import { generatePhotos } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import { renderBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const pictures = generatePhotos();

renderThumbnails(pictures, container);
renderBigPicture(pictures, container);

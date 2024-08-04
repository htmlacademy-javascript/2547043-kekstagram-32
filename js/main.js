import { generatePhotos } from './data.js';
import { renderGallery } from './gallery.js';
import './upload-overlay.js';
import './form.js';

renderGallery(generatePhotos());

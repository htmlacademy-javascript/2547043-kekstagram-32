// import { thumbnailsContainer } from './thumbnails.js';

// const bigPicture = document.querySelector('.big-picture');
// const bigPictureCloseButton = document.querySelector('#picture-cancel');
// const bigPictureImg = bigPicture.querySelector('img');
// const bigPictureLikes = bigPicture.querySelector('.likes-count');
// const bigPictureTotalComments = bigPicture.querySelector('.social__comment-total-count');
// const bigPictureShownComments = bigPicture.querySelector('.social__comment-shown-count');
// const bigPictureCommentsSection = bigPicture.querySelector('.social__comments');
// const bigPictureDescription = bigPicture.querySelector('.social__caption');
// const bigPictureCommentsSectionCounter = bigPicture.querySelector('.social__comment-count');
// const BigPictureCommentsLoaderSection = bigPicture.querySelector('.comments-loader');

// function closeOnEscape (evt) {
//   if(evt.key === 'Escape') {
//     closeBigPicture();
//   }
// }

// function closeBigPicture () {
//   bigPicture.classList.add('hidden');
//   document.body.classList.remove('modal-open');
//   bigPictureCloseButton.removeEventListener('click', closeBigPicture);
//   document.removeEventListener('keydown', closeOnEscape);
// }

// function openBigPicture (evt) {
//   bigPicture.classList.remove('hidden');
//   bigPictureCloseButton.addEventListener('click', closeBigPicture);
//   document.addEventListener('keydown', closeOnEscape);
//   document.body.classList.add('modal-open');
//   bigPictureImg.src = evt.target.src;
//   bigPictureLikes.textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
//   bigPictureShownComments.textContent = 0; // textContent показанных комментариев на странице. Не знаю как осуществить
//   bigPictureTotalComments.textContent = evt.target.closest('.picture').querySelector('.picture__comments').textContent;
//   // наполнить список комментариев
//   bigPictureDescription.textContent = evt.target.alt;
// }

// thumbnailsContainer.addEventListener('click',(evt) => {
//   if (evt.target.closest('.picture')) {
//     evt.preventDefault();
//     openBigPicture(evt);
//     bigPictureCommentsSectionCounter.classList.add('hidden');
//     BigPictureCommentsLoaderSection.classList.add('hiiden');
//   }
// });

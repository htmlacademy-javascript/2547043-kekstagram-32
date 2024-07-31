import { thumbnailsContainer, getDataObjectIndexFromThumbnailId } from './thumbnails';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('#picture-cancel');
const image = bigPicture.querySelector('img');
const likes = bigPicture.querySelector('.likes-count');
const totalComments = bigPicture.querySelector('.social__comment-total-count');
const shownComments = bigPicture.querySelector('.social__comment-shown-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');
const commentsContainerCounter = bigPicture.querySelector('.social__comment-count');
const commentsContainerLoader = bigPicture.querySelector('.comments-loader');

function closeOnEscape (evt) {
  if(evt.key === 'Escape') {
    closeBigPicture();
  }
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', closeOnEscape);
  commentsContainer.innerHTML = '';
}

const createComment = (commentData) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = commentData.avatar;
  comment.querySelector('.social__text').textContent = commentData.message;
  comment.querySelector('.social__picture').alt = commentData.name;
  return comment;
};

const renderComments = (commentsData) => {
  const fragment = document.createDocumentFragment();
  commentsData.forEach((commentData)=>{
    const comment = createComment(commentData);
    fragment.append(comment);
  });
  commentsContainer.append(fragment);
};

function openBigPicture (evt, photosData) {
  const dataObjectIndex = getDataObjectIndexFromThumbnailId(evt, photosData);
  commentsContainer.innerHTML = '';
  bigPicture.classList.remove('hidden');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeOnEscape);
  document.body.classList.add('modal-open');
  image.src = photosData[dataObjectIndex].url;
  likes.textContent = photosData[dataObjectIndex].likes;
  renderComments(photosData[dataObjectIndex].comments);
  shownComments.textContent = commentsContainer.children.length;
  totalComments.textContent = photosData[dataObjectIndex].comments.length;
  description.textContent = photosData[dataObjectIndex].description;
}

const renderBigPicture = (photosData) => {
  thumbnailsContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      evt.preventDefault();
      openBigPicture(evt, photosData);
      commentsContainerCounter.classList.add('hidden');
      commentsContainerLoader.classList.add('hiiden');
    }
  });
};

export { renderBigPicture };

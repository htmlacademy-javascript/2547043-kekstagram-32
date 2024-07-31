import { getPictureIndexFromThumbnailId } from './thumbnails';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('#picture-cancel');
const image = bigPicture.querySelector('img');
const likes = bigPicture.querySelector('.likes-count');
const totalComments = bigPicture.querySelector('.social__comment-total-count');
const shownComments = bigPicture.querySelector('.social__comment-shown-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');
const commentsContainerCounter = bigPicture.querySelector('.social__comment-count');
const commentsContainerLoadButton = bigPicture.querySelector('.comments-loader');

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

// function getBigPictureDetails () {

// };

function openBigPicture (evt, pictures) {
  commentsContainer.innerHTML = '';
  const dataObjectIndex = getPictureIndexFromThumbnailId(evt, pictures);
  bigPicture.classList.remove('hidden');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeOnEscape);
  document.body.classList.add('modal-open');
  image.src = pictures[dataObjectIndex].url;
  likes.textContent = pictures[dataObjectIndex].likes;
  renderComments(pictures[dataObjectIndex].comments);
  shownComments.textContent = commentsContainer.children.length;
  totalComments.textContent = pictures[dataObjectIndex].comments.length;
  description.textContent = pictures[dataObjectIndex].description;
}

const renderBigPicture = (pictures, container) => {
  container.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      evt.preventDefault();
      openBigPicture(evt, pictures);
      commentsContainerCounter.classList.add('hidden');
      commentsContainerLoadButton.classList.add('hiiden');
    }
  });
};

export { renderBigPicture };

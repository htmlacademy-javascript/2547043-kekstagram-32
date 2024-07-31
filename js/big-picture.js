const bigPictureElement = document.querySelector('.big-picture');
const closeButtonElement = document.querySelector('#picture-cancel');
const imageElement = bigPictureElement.querySelector('img');
const likesElement = bigPictureElement.querySelector('.likes-count');
const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const commentsContainerLoadButtonElement = bigPictureElement.querySelector('.comments-loader');
const totalCommentsElement = bigPictureElement.querySelector('.social__comment-total-count');
const shownCommentsElement = bigPictureElement.querySelector('.social__comment-shown-count');

const COMMENTS_DOSE = 5;
let loadedComments = 0;
let comments = [];

function closeOnEscape (evt) {
  if(evt.key === 'Escape') {
    closeBigPicture();
  }
}

const createComment = ({avatar, message, name}) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__text').textContent = message;
  comment.querySelector('.social__picture').alt = name;

  return comment;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const futureShownCommentsLength = loadedComments + COMMENTS_DOSE;
  for (let i = loadedComments; i < futureShownCommentsLength; i++) {
    if (comments[i] !== undefined) {
      const comment = createComment(comments[i]);
      fragment.append(comment);
      loadedComments += 1;
    }
  }
  commentsContainerElement.append(fragment);
  shownCommentsElement.textContent = document.querySelector('.social__comments').children.length;
  if(shownCommentsElement.textContent === totalCommentsElement.textContent) {
    commentsContainerLoadButtonElement.classList.add('hidden');
  } else {
    commentsContainerLoadButtonElement.classList.remove('hidden');
  }
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsContainerLoadButtonElement.removeEventListener('click', renderComments);
  closeButtonElement.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', closeOnEscape);
  commentsContainerElement.innerHTML = '';
  loadedComments = 0;
}

const getPictureDetails = (picture) => {
  imageElement.src = picture.url;
  imageElement.alt = picture.description;
  likesElement.textContent = picture.likes;
  descriptionElement.textContent = picture.description;
  totalCommentsElement.textContent = picture.comments.length;
};

const openBigPicture = (picture) => {
  comments = picture.comments;
  bigPictureElement.classList.remove('hidden');
  closeButtonElement.addEventListener('click', closeBigPicture);
  commentsContainerLoadButtonElement.addEventListener('click', renderComments);
  document.addEventListener('keydown', closeOnEscape);
  document.body.classList.add('modal-open');
  commentsContainerElement.innerHTML = '';
  getPictureDetails(picture);
  renderComments();
};

export { openBigPicture };

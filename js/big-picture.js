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

const createComment = ({avatar, message, name}) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__text').textContent = message;
  comment.querySelector('.social__picture').alt = name;

  return comment;
};

const renderComments = (comments) => {
  commentsContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });

  commentsContainer.append(fragment);
};

const getPictureDetails = (picture) => {
  image.src = picture.url;
  image.alt = picture.description;
  likes.textContent = picture.likes;
  description.textContent = picture.description;
};

function openBigPicture (picture) {
  bigPicture.classList.remove('hidden');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeOnEscape);
  document.body.classList.add('modal-open');
  getPictureDetails(picture);
  renderComments(picture.comments);
  totalComments;
  shownComments;
  commentsContainerCounter.classList.add('hidden');
  commentsContainerLoadButton.classList.add('hiiden');
}

export { openBigPicture };

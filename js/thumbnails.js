const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({id, url, description, likes, comments}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const thumbnailInfo = thumbnail.querySelector('.picture__info');
  thumbnail.dataset.thumbnailId = id;
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnailInfo.querySelector('.picture__comments').textContent = comments.length;
  thumbnailInfo.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
};

const renderThumbnails = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };

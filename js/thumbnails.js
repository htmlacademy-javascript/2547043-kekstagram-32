const thumbnailsContainer = document.querySelector('.pictures');
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

const renderThumbnails = (thumbnailsData) => {
  const fragment = document.createDocumentFragment();
  thumbnailsData.forEach((thumbnailData) => {
    const thumbnail = createThumbnail(thumbnailData);
    fragment.append(thumbnail);
  });
  thumbnailsContainer.append(fragment);
};

const getDataObjectIndexFromThumbnailId = (evt, thumbnailsData) => {
  const givenThumbnail = thumbnailsData.find((thumbnailData)=> String(thumbnailData.id) === evt.target.closest('.picture').dataset.thumbnailId);
  const thumbnailIndex = thumbnailsData.indexOf(givenThumbnail);
  return thumbnailIndex;
};

export { renderThumbnails, getDataObjectIndexFromThumbnailId, thumbnailsContainer };

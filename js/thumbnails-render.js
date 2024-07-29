const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const thumbnailInfo = thumbnail.querySelector('.picture__info');
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnailInfo.querySelector('.picture__comments').textContent = comments.length;
  thumbnailInfo.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
};

const createThumbnails = (thumbnailsData) => {
  const fragment = document.createDocumentFragment();
  thumbnailsData.forEach((thumbnailData) => {
    const thumbnail = createThumbnail(thumbnailData);
    fragment.append(thumbnail);
  });
  thumbnailsContainer.append(fragment);
};

export {createThumbnails};

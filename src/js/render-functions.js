import SimpleLightbox from 'simplelightbox';

export const galleryContainer = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
export const loadMoreButton = document.querySelector('.button-load');

let lightbox = new SimpleLightbox('.gallery a');

// отрисовка галерии
export const createGallery = images => {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-img-list">
        <a href="${largeImageURL}" class="gallery-link">
        <img class="img" src="${webformatURL}" alt="${tags}" width="360"/>
      </a>
      <div class="info-wrapper">
        <div class="img-info">
          <p class="label">Likes</p>
          <p class="value">${likes}</p>
        </div>
        <div class="img-info">
          <p class="label">Views</p>
          <p class="value">${views}</p>
        </div>
        <div class="img-info">
          <p class="label">Comments</p>
          <p class="value">${comments}</p>
        </div>
        <div class="img-info">
          <p class="label">Downloads</p>
          <p class="value">${downloads}</p>
        </div>
      </div>
    </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
};

// очистка галереи
export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

// показ/скрытие лоадера
export const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};
export const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

// показ/скрытие кнопки LoadMore
export const showLoadMoreButton = () => {
  loadMoreButton.classList.remove('is-hidden');
};
export const hideLoadMoreButton = () => {
  loadMoreButton.classList.add('is-hidden');
};

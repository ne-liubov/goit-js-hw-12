import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  loadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const searchFormEl = document.querySelector('form');

let query = null;
let page = 1;
let totalHits = 0;
const perPage = 15;

const onFormSubmit = async event => {
  event.preventDefault();

  // ключевое слово, которое ввел пользователь
  query = event.currentTarget.elements['search-text'].value.trim();

  clearGallery(); // очистить галерею
  hideLoadMoreButton(); // скрыть кнопку

  page = 1; // обязательно, чтоб при смене ключ-слова страница начиналась с 1

  if (query === '') {
    iziToast.show({
      message: 'Please enter your request!',
      position: 'topRight',
    });
    return;
  }

  showLoader(); // показать loader перед запросом

  try {
    const response = await getImagesByQuery(query, page);
    const images = response.data.hits;
    totalHits = response.data.totalHits;

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        theme: 'dark',
      });
      return;
    }

    createGallery(images); // отрисовка галереи

    if (page * perPage < totalHits) {
      showLoadMoreButton(); // показать кнопку
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMoreButton(); // скрыть кнопку, если картинок больше 15
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader(); // скрыть loader
    searchFormEl.reset(); // очистить форму
  }
};

const onLoadMoreButton = async () => {
  page++;
  showLoader(); // показ loader

  try {
    const response = await getImagesByQuery(query, page);
    const images = response.data.hits;

    createGallery(images); // отрисовка галереи

    const { height } = document
      .querySelector('.gallery-img-list')
      .getBoundingClientRect();
    window.scrollBy({ top: height * 1.7, behavior: 'smooth' });

    // если на следующей странице картинок меньше, чем perPage, скрываем кнопку
    if (images.length < perPage) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      hideLoadMoreButton(); // скрыть кнопку
      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(); // скрыть loader
  }
};

searchFormEl.addEventListener('submit', onFormSubmit);
loadMoreButton.addEventListener('click', onLoadMoreButton);

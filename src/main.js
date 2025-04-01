import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  smoothScroll,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();
  if (!query) return;

  page = 1;
  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;
    renderImages(data.hits);

    if (totalHits > 15) {
      showLoadMore();
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
    event.target.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();
  hideLoadMore();

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    smoothScroll();

    if (page * 15 >= totalHits) {
      hideLoadMore();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#fff',
        backgroundColor: '#4e75ff',
        position: 'topRight',
      });
    } else {
      showLoadMore();
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
  }
});

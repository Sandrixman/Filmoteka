import getRefs from './refs ';
import { saveToQueue, saveToWatched, loadFromQueue, loadFromWatched } from './mylibrary-service';

const { overlay, modal, modal__info, modalCloseBtn } = getRefs();

let data = '';
let watchedArray = loadFromWatched();
let queueArray = loadFromQueue();
export let movieId = '';

modal.addEventListener('click', onModalBtnClick);

function onModalBtnClick(evt) {
  const { title, genres, poster, year, vote, votes, about, popularity } = data.dataset;
  if (evt.target.classList.contains('add-watched')) {
    const newObject = {
      fullposter_path: poster,
      title,
      genres,
      release_year: year,
      overview: about,
      popularity,
      vote_average: vote,
      vote_count: votes,
    };
    watchedArray.push(newObject);

    saveToWatched(watchedArray);
    evt.target.classList.add("delete-watched");
    evt.target.classList.remove('add-watched');
    evt.target.textContent = "Delete from watched";
    return;
  }

  if (evt.target.classList.contains('delete-watched')) {
    watchedArray = watchedArray.filter(item => item.title !== title);

    saveToWatched(watchedArray);
    evt.target.classList.add("add-watched");
    evt.target.classList.remove('delete-watched');
    evt.target.textContent = "Add to watched";
    return;
  }
  if (evt.target.classList.contains('add-queue')) {
    const newObject = {
      fullposter_path: poster,
      title,
      genres,
      release_year: year,
      overview: about,
      popularity,
      vote_average: vote,
      vote_count: votes,
    };
    queueArray.push(newObject);

    saveToQueue(queueArray);
    evt.target.classList.add("delete-queue");
    evt.target.classList.remove('add-queue');
    evt.target.textContent = "Delete from queue";
    return;
  }

  if (evt.target.classList.contains('delete-queue')) {
    queueArray = queueArray.filter(item => item.title !== title);

    saveToQueue(queueArray);
    evt.target.classList.add("add-queue");
    evt.target.classList.remove('delete-queue');
    evt.target.textContent = "Add to queue";
    return;
  }

}

export function renderModal(evt) {
  data = evt.target.closest('.movie-list__item');
  const { title, genres, poster, popularity, about, votes, vote } =
    data.dataset;

  let queueBtnMarkup = 'class="modal__btn add-queue">add to queue';
  console.log(queueArray.filter(item => item.title === title));
  if (queueArray.filter(item => item.title === title).length) {
    queueBtnMarkup = 'class="modal__btn delete-queue btn-accent">Delete from queue';
  }

  let watchedBtnMarkup = 'class="modal__btn add-watched btn-accent">add to Watched';
  if (watchedArray.filter(item => item.title === title).length) {
    watchedBtnMarkup = 'class="modal__btn delete-watched btn-accent">Delete from Watched';
  }

  const markup = `
  <img
    class="modal__img"
    src="${poster}"
    alt=""
  />
  <div class="movie-description">
    <h2 class="movie-title">${title}</h2>
    <ul class="movie-info__list">
      <li class="movie-info__item">
        <p class="info-name">Vote / Votes</p>
        <p class="info-value votes-wrapper"><span class="vote-average">${vote}</span> / ${votes}</p>
      </li>
      <li class="movie-info__item">
        <p class="info-name">Popularity</p>
        <p class="info-value">${popularity}</p>
      </li>
      <li class="movie-info__item">
        <p class="info-name">Original Title</p>
        <p class="info-value">${title}</p>
      </li>
      <li class="movie-info__item">
        <p class="info-name">Genre</p>
        <p class="info-value">${genres}</p>
      </li>
    </ul>
    <div class="movie-about">
      <p class="about__title">About</p>
      <p class="about__text">${about}</p>
    </div>
    <div class="btn-wrapper">
      <button ${watchedBtnMarkup}</button>
      <button ${queueBtnMarkup}</button>
    </div >
  </div > `;

  modal__info.innerHTML = markup;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // ховаємо модалку фільму по Escape

  document.addEventListener('keydown', escapePressed);

  removeModal();
}

function removeModal() {
  modalCloseBtn.addEventListener('click', addHidden);
  overlay.addEventListener('click', addHidden);
}

function addHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  document.removeEventListener('keydown', escapePressed);
}

function escapePressed(event) {
  event.preventDefault();

  if (event.code === 'Escape') {
    console.log('Ecsape was pressed');
    addHidden();
  }
}

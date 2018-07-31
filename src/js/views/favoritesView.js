import { elements } from "./base";

export const renderFavorite = favorite => {
  const markup = `
    <li class="favorites__item" data-itemid=${favorite.id}>
      <a class="favorites__link" href="#${favorite.id}">
        <figure class="favorites__fig">
          <img src="${favorite.img}" alt="" class="favorites__image">
        </figure>
        <p class="favorites__name">${favorite.title}</p>
      </a>
      <button class="btn-delete">
        <svg class="icon icon--delete">
          <use href="dist/img/icons.svg#icon-cancel-circle"></use>
        </svg>
      </button>
    </li>
  `;
  elements.favorites.insertAdjacentHTML("beforeend", markup);
};

export const deleteFavorite = id => {
  const el = document.querySelector(`.favorites__link[href="#${id}"]`)
    .parentElement;
  if (el) el.parentElement.removeChild(el);
};

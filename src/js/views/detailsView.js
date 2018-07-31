import { elements } from "./base";

const createIngredient = (ingredient, measure) => `
  <li class="details__ingredient">
    <figure class="details__ingredient-fig">
      <img src="https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png " alt="" class="details__ingredient-img">
    </figure>
    <span>${measure} ${ingredient}</span>
  </li>
`;

const isAlcoholic = alcoholic => {
  if (alcoholic === "Alcoholic") {
    return "Yes";
  } else {
    return "No";
  }
};

export const renderDetails = details => {
  const markup = `
  <div class="details">
      <button class="btn-fav">
        <svg class="icon icon--heart">
          <use href="dist/img/icons.svg#icon-heart"></use>
        </svg>
      </button>
      <h2 class="details__title">${details.title}</h2>
      <figure class="details__fig">
        <img src="${details.image}" alt="" class="details__img">
      </figure>
      <div class="details__info">
        <p><span class="details__span">Category:</span> ${details.category}</p>
        <p><span class="details__span">Glass:</span> ${details.glass}</p>
        <p><span class="details__span">Alcoholic:</span> ${isAlcoholic(
          details.alcoholic
        )}</p>
        <ul class="details__ingredients-list">
          <span class="details__span">Ingredients:</span>


         ${details.ingredients
           .map((el, i) => createIngredient(el, details.measures[i]))
           .join("")}

        </ul>
      </div>
      <div class="details__instruction">
        <h3 class="details__instruction-title">Instruction</h3>
        <p class="details__instruction-text">${details.instruction}</p>
      </div>
    </div>
  </div>
  `;
  elements.drinksSection.insertAdjacentHTML("afterbegin", markup);
};

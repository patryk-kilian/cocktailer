import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.drinksSection.innerHTML = "";
};

const renderDrink = drink => {
  const markup = `
    <div class="drink">
      <figure class="drink__fig">
        <img src="${drink.strDrinkThumb}" alt="" class="drink__image">
      </figure>
      <a href="#${drink.idDrink}" class="drink__link">${drink.strDrink}</a>
    </div>
  `;
  elements.drinksSection.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = drinks => {
  drinks.forEach(renderDrink);
};

export const renderNull = () => {
  const markup = `
  <p class="paragraph-big">Sorry not found :(</p>
  `;
  elements.drinksSection.insertAdjacentHTML("beforeend", markup);
};

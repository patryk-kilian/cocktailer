import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.drinksSection.innerHTML = '';
};

const renderDrink = drink => {
  const markup = `
    <div class="drink">
      <img src="${drink.strDrinkThumb}" alt="" class="drink__image">
      <a href="" class="drink__link">${drink.strDrink}</a>
    </div>
  `;
  elements.drinksSection.insertAdjacentHTML('beforeend', markup);

};

export const renderResults = (drinks) => {
  drinks.forEach(renderDrink);
};
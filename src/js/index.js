import Search from "./models/Search";
import Details from "./models/Details";
import Favorites from "./models/Favorites";
import * as searchView from "./views/searchView";
import * as detailsView from "./views/detailsView";
import * as favoritesView from "./views/favoritesView";
import { elements } from "./views/base";

const state = {};

//SEARCH CONTROLLER
const controlSearch = async type => {
  let query;

  if (type === "random") {
    query = "random";
  } else {
    query = searchView.getInput();
  }

  if (query) {
    state.search = new Search(query);

    //CLEAR RESULTS BEFORE RENDER
    searchView.clearInput();
    searchView.clearResults();

    //GET RESULTS
    await state.search.getResults();

    //RENDER RESULTS TO DOM
    if (state.search.result === null) {
      searchView.renderNull();
    } else {
      searchView.renderResults(state.search.result);
    }
  } else {
    console.log("error");
  }
};

const controlDetails = async () => {
  const id = window.location.hash.replace("#", "");

  if (id) {
    state.details = new Details(id);

    try {
      await state.details.getDetails();
      searchView.clearResults();
      detailsView.renderDetails(state.details);
    } catch (error) {
      console.log(error);
    }
  } else {
    searchView.clearResults();
  }
};

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlDetails)
);

window.addEventListener("load", () => {
  state.favorites = new Favorites();
  state.favorites.readStorage();
  state.favorites.favorites.forEach(favorite =>
    favoritesView.renderFavorite(favorite)
  );
});

const controlFavorites = () => {
  if (!state.favorites) state.favorites = new Favorites();
  const currentID = state.details.id;

  if (!state.favorites.isFavorite(currentID)) {
    const newFavorite = state.favorites.addFavorite(
      currentID,
      state.details.image,
      state.details.title
    );

    favoritesView.renderFavorite(newFavorite);
  } else {
    state.favorites.deleteFavorite(currentID);

    favoritesView.deleteFavorite(currentID);
    console.log(state.favorites);
  }
};

//HANDLE SEARCH FORM
elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
  console.log(searchView.getInput());
});

//HANDLE BUTTON FOR RANDOM DRINKS
elements.randomButton.addEventListener("click", e => {
  if (e.target.matches(".btn--random, .btn--random *")) {
    controlSearch("random");
  }
});

elements.drinksSection.addEventListener("click", e => {
  if (e.target.matches(".btn-fav, .btn-fav *")) {
    controlFavorites();
  }
});

elements.favorites.addEventListener("click", e => {
  const id = e.target.closest(".favorites__item").dataset.itemid;

  if (e.target.matches(".btn-delete, .btn-delete *")) {
    favoritesView.deleteFavorite(id);
    state.favorites.deleteFavorite(id);
  }
});

import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

const state = {};

window.state = state;

//SEARCH CONTROLLER
const controlSearch = async (type) => {
  let query;

  if (type === 'random') {
    query = 'random';
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
    searchView.renderResults(state.search.result);
    console.log(state.search.result);
  } else {
    console.log('error')
  }
}

//HANDLE SEARCH FORM
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
  console.log(searchView.getInput());
});

//HANDLE BUTTON FOR RANDOM DRINKS
elements.randomButton.addEventListener('click', e => {
  if (e.target.matches('.btn-random, .btn-random *')) {
    controlSearch('random');
  };
});




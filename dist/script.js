const searchfield = document.querySelector('.search__field');
const search = document.querySelector('.search');
console.log(searchfield);

const getInput = () => searchfield.value;
const clearInput = () => searchfield.value = '';

search.addEventListener('submit', e => {
  e.preventDefault();
  let value = getInput();
  console.log(value);
  clearInput();
})



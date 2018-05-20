import uniqid from 'uniqid';

export default class Favorites {
  constructor() {
    this.favorites = [];
  }

  addFavorite(id, img, title) {

    const favorite = {id, img, title};
    this.favorites.push(favorite);

    return favorite;
  }

  deleteFavorite(id) {
    const index = this.favorites.findIndex(el => el.id === id);

    this.favorites.splice(index, 1);
  }

  isFavorite(id) {
    return this.favorites.findIndex(el => el.id === id) !== -1;
  }
}
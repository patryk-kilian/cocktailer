import uniqid from "uniqid";

export default class Favorites {
  constructor() {
    this.favorites = [];
  }

  addFavorite(id, img, title) {
    const favorite = { id, img, title };
    this.favorites.push(favorite);

    this.persistData();
    return favorite;
  }

  deleteFavorite(id) {
    const index = this.favorites.findIndex(el => el.id === id);

    this.favorites.splice(index, 1);

    this.persistData();
  }

  isFavorite(id) {
    return this.favorites.findIndex(el => el.id === id) !== -1;
  }

  getNumFavorites() {
    return this.favorites.length;
  }

  persistData() {
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem("favorites"));
    if (storage) this.favorites = storage;
  }
}

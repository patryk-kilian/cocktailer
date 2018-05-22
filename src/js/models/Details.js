import axios from 'axios';

export default class Details {
  constructor(id) {
    this.id = id;
  }

  async getDetails() {
    try {
      const res = await axios (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`);
      this.title = res.data.drinks[0].strDrink;
      this.category = res.data.drinks[0].strCategory;
      this.glass = res.data.drinks[0].strGlass;
      this.instruction = res.data.drinks[0].strInstructions;
      this.image = res.data.drinks[0].strDrinkThumb;
      this.alcoholic = res.data.drinks[0].strAlcoholic;
      let i = 1;
      this.ingredients = [];
      this.measures = [];
      for (let i = 1; i <= 15; i++) {
        if (res.data.drinks[0][`strIngredient${i}`].length > 0) {
          this.ingredients.push(res.data.drinks[0][`strIngredient${i}`]);
          this.measures.push(res.data.drinks[0][`strMeasure${i}`]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
